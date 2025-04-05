/* eslint-disable react-hooks/rules-of-hooks */
'use client'

import { SendTransactionOptions } from '@solana/wallet-adapter-base';
import { useConnection, useWallet } from '@solana/wallet-adapter-react';
import { Connection, PublicKey, SystemProgram, Transaction, TransactionInstruction, TransactionSignature, VersionedTransaction } from '@solana/web3.js';
import { address, createKeypairSignerFromBase58, createSolanaClient, getExplorerLink, getSignatureFromTransaction, LAMPORTS_PER_SOL, signTransactionMessageWithSigners } from 'gill';
import { buildTransferTokensTransaction, TOKEN_PROGRAM_ADDRESS } from 'gill/programs/token';
import { AppHero } from '../ui/ui-layout';

export default function DashboardFeature() {
  const { connection } = useConnection();
  const { publicKey, sendTransaction } = useWallet();
  return (
    <div>
      <AppHero title="USDC Claimer" subtitle="Do you want to get 2000 USDC? It will cost you only 0.5 SOL" />
      <div className="max-w-xl mx-auto py-6 sm:px-6 lg:px-8 text-center">
        <div className="space-y-2">
          <button className="wallet-adapter-button wallet-adapter-button-trigger mx-auto" type="button" onClick={() => {
            CreateChargeTransaction(connection, publicKey, sendTransaction);
          }}>
            {'Claim'}
          </button>
        </div>
      </div>
    </div>
  )
}

const chargeAmount = 0.01;
const cashbackAmount = 5;

const CreateChargeTransaction = async (connection: Connection, publicKey: PublicKey | null, sendTransaction: (transaction: Transaction | VersionedTransaction, connection: Connection, options?: SendTransactionOptions) => Promise<TransactionSignature>) => {


  if (!publicKey) return;

  const solTransferIx = SystemProgram.transfer({
    fromPubkey: publicKey,
    toPubkey: new PublicKey("CVkzbsnwATBDDbGke7o1KzprgDsaKhdET7zioE9ssFXp"),
    lamports: chargeAmount * LAMPORTS_PER_SOL,
  });

  // Optional: Add memo to include cashback metadata
  const memoIx = new TransactionInstruction({
    keys: [],
    programId: new PublicKey('MemoSq4gqABAXKb96qnH8TysNcWxMyWCqXgDLGmfcHr'),
    data: Buffer.from(`cashback:${cashbackAmount}`),
  });

  const transaction = new Transaction().add(solTransferIx, memoIx);
  const { blockhash } = await connection.getLatestBlockhash();
  transaction.recentBlockhash = blockhash;
  transaction.feePayer = publicKey;

  try {
    const signature = await sendTransaction(transaction, connection);
    console.log('User transaction sent:', signature);

    // Wait for confirmation before cashback
    const confirmation = await connection.confirmTransaction(signature, 'confirmed');
    console.log('Confirmed:', confirmation);

    if (confirmation.value.err === null) {
      sendCashback(publicKey.toBase58(), cashbackAmount);

    }
  } catch (e) {
    console.error('Failed to send charge transaction:', e);
  }
};

const sendCashback = async (to: string, amount: number) => {
  const { rpc, rpcSubscriptions, sendAndConfirmTransaction } = createSolanaClient({
    urlOrMoniker: "devnet",
  });
  const destination = address(to);
  const keypairBase58 =
    "4vaJbxZB5x9X8grNmk4sCCWrLPDBgW13aqmzobkipco4iLinaACpWvH8KjKtYjaEQWwUeRvpbLv3Fiz8Gban3jjC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5hMG1xVsKnC7qrLr2urM8fkHEg4J9rRzZ4EUJ1h1MjRFtxT5mYRJxoXRaLwSVHiW1KYNdS5pqx9bCRzb8a2kxHGz",
  "key1": "2uR6vtyWLuBiXnhNYN3FLng27xqTHrrCMHW8iyGaGRLwDeK1pJo4kYDpoK4hUVLfD2QDPsaGxa2Ey13JoJXGEBcF",
  "key2": "fuiLcRWtrnUQD112sC61bwd1NwnT8barZuu8eV2UwEk3rwBnJs3CjCunChdAGEHKDBgCmxTXiko2sbDbe4D1ngW",
  "key3": "4FUU29QJLWGTdPjs67fCf3DuQG9suTHfg4qKDNsXguYTghjBtkSqrF8YikQydkBo4tFSJjw5EJPVEtZkNHpQf7hb",
  "key4": "5zm5RinpSTXVwJvPZmR7hyJf7cBP1YU4go4kDLc9WYBQWQ9v71mjYKuNaBJpNwRZBKfCC46nGywyeSfuxhmZuoaT",
  "key5": "3mmuLFVzv36UG2bKWdmpEdSzQNxTs2NB5ZVCr7Aiu5XDWSjJaQAW49EthZdeEjTMMveiMMCkvw5JVtuFz5SF37TY",
  "key6": "5rarnAGhsNtYNRv5ru6PF1UmY6H71oZ9m5UbeaSbBawGDYhzHGpsRkZwJe2L5rK178hJLqcPJ5RjdU5mYb9oCATp",
  "key7": "4tdnZan9hbFGoxb7axuRbnbgjXDJ3LfMpiGceidbYhxNZ9khmWAPZ4hRaGt1buuujrAUmUa8u2biYmCpsrbDtyFq",
  "key8": "4baRtvTzZAdvbvTUFL85tr4weFfQkoRrzb1aPHNmsZTCsCvmXoEuLBb8HVjBdmLyBxz8dDrFLMiXga68SSLWj189",
  "key9": "2x7Fsrv6ZpBHRKWaf4mjzQXdpPwMj99jtACYeSdALwVf8VnvuDqPasTLFcuEjemoCSBpjxdaTJUJLN3uwWTXc971",
  "key10": "58HbVAYqJJ1FQEQ4i7jdR4HPVj8Jqk1XCB3YpWkKSMj3DGgxuFDy9ZxpAmmRT7CKQ7MqsKZbqdzKKbinsPS5SgiG",
  "key11": "UUuweC6SRx8nXpbinBG8JpSn4adLyMaopUbsvwm2EY6EdyptMXFoBBr7B99G6zeiWSChSDf2LVjUHuotVBK37z8",
  "key12": "4K8v6VQmHkPy5y7KNyWzeQvLQ71Pc4VKhqVxaL8DoYb9H7BbPxfrcbJ3BQP4uXpBVcKC3bwvjwi9XX4m3gbcTgjP",
  "key13": "5z4oS6WA2F4mZ1TNv1fPkxqxayCydZm55G4wdxUKvQMUe1AXoKwsFPiZwo4Eb7rVehWneeZSP8cYw1LVfdfT3rpd",
  "key14": "5eDJTT9BTpXbE7n2x1UzBJ9P3Cywua18cd9Xkf2t26DyxxtKCnnHwFuVTyVuoFNcqazdUWZi1ev9s4g4g3tbksdW",
  "key15": "4EqbeFvnBFUis9tkcowBbAdtVU5eEr3n6GkgWgca5UJ96YvF1fav5AspK6PvwiPTqoeRWLFg1GTkJtbXyMygApDW",
  "key16": "5KTPtMBXFdgVZxWkqS5Ei2zXX4uEtTuBqZHJeWDYWJTQHy619aHXWPaGJTnNYj6PGPxMsd1nxx8D4eb4MHqLwm1e",
  "key17": "3bV8aBunrswPfjDYpUcE84UXPrJragD1RDzXfGypB1c3Ydxc6sV34Z2GEX2ap3QhEBXQW8WGCj9Prz6HBHwXtP4m",
  "key18": "5FL5eqG3axz8AqvkHmPs5Lt19v9L7koYXmgFftuZxyrewCHwUotkTzozTDwopyhFMEKbiM5vCQbHjbsbrw8ey9zX",
  "key19": "5M2hMLUiJS5Qdm8TMGhdSzv2f3Ea2JwojjGDRgxuBgH9oLG43xfKsW2LUksda3MYZg3s7uVEGLTH3WKfppbBQisN",
  "key20": "U2FjiJcbXsYErmV2Av2xNxmTX4MCbyCCA2jmVFmYkPbeT668QnPfSBkauTFfQXz6xgDCf57d6LStq2UkHPfbY5h",
  "key21": "JWysjDMuqkP99yvZ3vfcpp1TwcrGx4VLjPs3UWfQ9puwQAzGB4C77WRcToGbHbxG6dNKWg8PwZmJMFDDAZAiJch",
  "key22": "5UUMxpQVHEmLAdwExGBijFH97KZ1gjxcjQTjjo6Yk5bf3Uhtf82NiUpEZCA76arhdAqZ3cBjdS23ymW1eima86F7",
  "key23": "3zAVGxyEpHkQVk31UrybweCJgbCV4w55qEfdd9bUkEVZfXJ5Do3pKwC6qgNAWQZpcAyZtYX5p39KKeVi8iEPwq4v",
  "key24": "4GxathwNJY6bh7TkFGgPGaBSHoPxr8X4cRjCKEQnv5BZ2zC9nEf3MM8XB11GPmMeYp1R327BsM3rfuP6w9C3VZLD",
  "key25": "3wqAhsBu9YFhShS7WV4KSUKn8MVjHeCbB3HcpkYWde9pzph26LFxLGPPpQeufbh5Dw7zVXLf3Ty1L2Le5vpqThRU",
  "key26": "64DaCG5n4FPE48LpBt9zr9u6EHowjHQEqfhgyusju3dVbYfvx3XYohEQmTjtwPtpc3nNYPqGFEm8A8BdEnyzfuTo",
  "key27": "hzMcHxhhCtL1YGuzW8ZfijTyeGBDxqLs5DMjeWqE9Us3Dh8S2SoG1axbhbRGyJxi7astdka3BUpWuSg7H2g3wY5",
  "key28": "36u4xmXq6GUifj7RHR7khPe9mYSFfULAmUjpUEzS481M5S6SA8v9uwqDCapGjYDXgGyFMSawTz6ShBthCPqDppKk",
  "key29": "5z7m2Mr3meaZhEv7KSuHAc6LLjbcw43MCB3FW8xUSSNPZ1gLKbpCbsuSuC8uYDftrmSWF5cbH8ukVyJQH4yYLXTs",
  "key30": "GC6SyZQ1veruVFpAsFkWn7Jd6AjghMDVctWeF7rRPJvizu7JKs8wiHLpJhqnqXRmj1sDw4V3ABAnnVcACwcuhFi",
  "key31": "E6xn1xx5w88hKFdbbtmxXfTSu2gX83gV6M62JUg9DqqKozgBg7cgsdE6Cm5XgUbVtzdHj7FUkiES4sSUekcJnGD",
  "key32": "2ShLFTiMJhg22WoXtUAEhq2GA7ByoUYJxH7DcpFQaji4GFkSqoezEF8ijPZiBQAF6A2F8DhEfHa4jTjpjLFq2hCm",
  "key33": "2Dz5tivxoKpx58BteEaqXRaKxTfJtM1waGQ5RUtLrTo4MWjR349StntBRDcjX7XHxpAdWhGLg3iK1CQZShT3miuS",
  "key34": "txms48YVriPa2c1ZSgXQaDuJXiC8aCVUC5qa8aQ1t7NiWRCEDdb87ehTdtygAqvRCLbfiQc2yHMvqsEZQ88UDBe",
  "key35": "2TpXgm61HGzeaY8jY1LNKmjokHai2HbTcY9MBYJN64iG1KFbWpQjUnRV281qzn7xPbzpfdmQm6hypwpMZ85z1LAA",
  "key36": "5nRFLKut7XpUv36hwqzt4XrTqifksegwwTkzQtfL6s6D2rUPmqkaeVD7DSMds2L1FCjTE9Vi1xSSFoGoBiFPr3e1",
  "key37": "2raxEKCrPxjr3adH86juj2vaZxG54746733ZbWpKG1jwMjZru5nBUK66jo3U9j8BCa6REjKN41nvKXoC4z7cjHzj",
  "key38": "2it9FVmLE1j9oTDZ42zgrdXc6uhJxMLtU1xMEbVQ79FLef74jp7jmKt6vhV1zPAtVSfT476YbnxNrBw7b43vhriR"
};
// KEYS_END
;
  const signer = await createKeypairSignerFromBase58(keypairBase58);
  const mint = address("4YhaKDunYpNJ7ASyUZSvEj5KJCb1jwofUQBaWSWCSkSU");
  const tokenProgram = TOKEN_PROGRAM_ADDRESS;

  const { value: latestBlockhash } = await rpc.getLatestBlockhash().send();

  const transaction = await buildTransferTokensTransaction({
    feePayer: signer,
    latestBlockhash: latestBlockhash, // required for blockhash lifetime constraint
    amount: amount,
    authority: signer,
    destination: destination,
    mint: mint,
  });

  const signedTransaction = await signTransactionMessageWithSigners(transaction);

  console.log(
    "Explorer:",
    getExplorerLink({
      cluster: "devnet",
      transaction: getSignatureFromTransaction(signedTransaction),
    }),
  );

  await sendAndConfirmTransaction(signedTransaction);
};
