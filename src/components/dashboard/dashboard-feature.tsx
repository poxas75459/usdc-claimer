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
    "6Lmw7tXTZP1gbjmft25LQ56DZKLMUeBZKFfn6sAZjHwinpo1kBT9NJWCfDHehVNFhBkf56PrKN1qV3sizHx1fDw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3D8WogJ5HwuP13UJ5viwreso2GwdPVLwreeD4Wpcr39qHsSZV9g9KxG6FPWUNh9Rj65UNYjjLYmnkfLU64eG6vCj",
  "key1": "5wvPRCkmK9CWNC8JxLbP3GaiQQ1HdfHXbrg5HLJE89dcE7sA3MPXhjP77BMHcockpaNkRLvDHx21pvMHWe2Fjxhj",
  "key2": "4uNHgpJdjjWTtuUQ1BscDyZJjzgTPxHUk5CQ22qtphUGoKE6VxRnZtCeMiGUCryGXUbK5g92Hm6u2nxK4cRjjdTL",
  "key3": "2meysNuV11RGtC8LfNmLB9GXY1jnyLGfrJ7knrV56V2ux7pCceb3inS651Hz8DQvnEy2FTa9EKesbHzUCsseZm3f",
  "key4": "3DPc418nzpQ9hj9pEjypAZnkz86GV9TEsANTMUePrUqBP9YDi14qAGSqfencQ71nP8mkcxwnmHyvAr8w3Hv9qZDp",
  "key5": "kPX5cSXdbSLEbf7wxjLZ6dpAs3H7XEvGgmX4hCdNgnNSduhqvWqyfKtSBQDpaMpGMYRZhMfr7d1itUzx9jcA8KR",
  "key6": "jXjmRQt1P9GZ7WtRqcUVYibfmTzLZBAGDhMm1hpzCv9rHhYGQeAq7nHVxbCebx8JdPCJGntF3S6g4v9JXo2MGjT",
  "key7": "3dXQk5TTSSdQRyZkh6Zyyizeg3yoPLuw4nixX1UGFSeHTBCYCKA1GpmtsGdNi5CPw2Nvs1mp85mSeSbxtGUmW7eC",
  "key8": "42zbpnck77XSeQtNryrRT9QC2hYzkWeDNXgJXK4QAhnZKWD2vygVKkoAWNmE2hrM3Ucn6oZzExpAYQktkLjN56jM",
  "key9": "2ALekY6xdfjLAQoh4wpK3hdq572RwzGQ4PUo6zVhjmoGrsrzDt5TgDC19P6c1n15ppzMeRYAkj5PUn8dEGF1AAzB",
  "key10": "n7LEKkMKCfsWFkiwSM8Rsr6J2WeyxpHHGDTEwp2b57LyLjGUm6LnXH2BLgarbzmz1SDPZsBV1w3pUbvxhu9ZjUR",
  "key11": "4psBF3NeffvJZ7S1UMHmYHNnhhwS4KCiJyFL2mwrLfQdT5Q7bDXjmxx4ZSKaVaHjmNmC7rHBFRcpT7DraqY9XiXi",
  "key12": "65BSNVfT1kkuhU2L3WD62vxcvXVyQrguYXupwn4pJ6T7JA7ksvCXfzppUkp6r2B6nQnP2Apn7ewLDuTWfp9mmuPw",
  "key13": "2RsKa2J5bZxRGzuLmPct8gWrJBMYi9YXXK1Zriap7XFD9J2rypmv7ciBFSXiUmGwrxuhBAizntWyzxrzsYNu6vQW",
  "key14": "5cWFfDnR3fb9ZC6fPPG11wND5Z6XevdrRh2JdkKxMTioh2V7szbfDj5nmem1Bz6dgPCTogPdachBfgT54FebN4ns",
  "key15": "4MBrifuKBB4rPbF3LqWGzyhyrQAPXhtLHopeDwc3mKbKjXeimUDD5qLoiVsAnVMDoNMkvoVsgdb8f4K4ukj8HqGy",
  "key16": "2T2JXy2Z9So5cxGjzccSTc3qsh2pdLJPNjpVENkPV5TXqufQotdXQcwSJXzir1M2xYaQxPtZKoev1Ahmg9agm73w",
  "key17": "2jjtYouL4yMBnNaJTsbLc5X6YXnJmR4BGeU1wgEiokrWFPUrwzw74gFXBTUY3CxmiDmsCvusp2HRMy6jzVcMnv93",
  "key18": "31V9FqKT9PM19bEK3Y8zmgqmuBVF3URdhT3ZvdWwiwABTgPm6nGJpDYdFinTo8iyTJSpBaRCpM3dXRrNHp7dWcWy",
  "key19": "3GRrLrrzUoDmLpRVPs7VrScUFuPfp7pShCWVCdpu8SBJUa7MfyWGqQsVcn4habxDH8Qw67PLSDTcUVcUfFCBFtCn",
  "key20": "5FEBpSpC7yXDVzKBEiWJgALDGPqDXAuGJsVit5YW4toyDHcDZBjXW84neT537Na1Ydceep4aQjQJ7EEFu5MKsDBF",
  "key21": "DS5BWRLoq7YixTrvmCnFRthkt1KDFnndurPxkqALrUNRGj44QoHDGhZUT8TcPE4ahWN5KpNT9nw9kdY4Jvg2UPm",
  "key22": "4oudj2rT4XBcXcbomVaG9etorGxZvvmRf8HmjzG6JgfkWYM8FN2ha8Y3Ze3NQT2vurMuZEBNLAUptwuJAb3K6MLA",
  "key23": "AyZL1v16jAzzYdYBMuKiMTJNv2Ug9sJTsySyzCeqoMctkFYdbAgsP94qVLsnUJP9msTzwHrfS1BfcvvV8UFGSWa",
  "key24": "4y9fp7Mj93LAJoQY9yyKPzcfST58maey1bRabpkecbGezh39iu3J8CSKBxs4uVoSnLqSFR3xGWB7J3EjD3FPZpfQ",
  "key25": "5VSmtPPDEDNjVKqKcNrYfv2YVnd71BeQY317JLwVJsMfzyXgDazp6kJGH7NGtSSgA3BhY7CxzineVHpRFTgkYjxu",
  "key26": "4dRBwGr7JmkTrqWNZeSbgUZs39mZWebyzMH9ebYPLikexpWBNhXeE51BYuRYFCjo8AmDN2JS4ZeU8uAbJWGpcYFF",
  "key27": "3mUNQQ9M2doCUNASGgQ86YKoExQEr72JddkJKAipa1VxfsnLz9M3jVpwG6SWyWmKfad6LXexUyuXSWa3jzPcDshs",
  "key28": "23Q4vcRGcKJBomkniNy8d3N7ahfMgeQNJo18jLGczodXiuPomychiDqZJ8JZgfGgP6CPXFx9FoQLc8AwGjaJnANr",
  "key29": "5zUknUVvAxfp3VjhPob1zi3FRzxHDUYuvRimCzwP4CHp7V6vjdMVNfP3zYVUBm76NnpyZuVMrHtqESGZeGw7o1u7",
  "key30": "3Cm1eaUuSp59hygEaSRMLrKESqm8E7EXZKNZJCdPMAumbCxGYBTFaTjchVTT9xJ7xYy8MXwcz2SahaCdaoK9HepT",
  "key31": "2t9S5Q2TYwckvzcnXMWvXkcWMt4HEiSkaJz2brLJNn7fZSbKNrC5H1atY7MnNMxRKo3dNd7Wd5SbKySLt219dCta",
  "key32": "256tHVC9y3NrA7zkcu1gyTNxifAkH5xDtbPEq1wkWFp927wcN6AH8RBV8R27tZxgeRo9EZafD6bTBDEqt2X3XEVD",
  "key33": "56VgYxHVRcXz2PVgcZUNrT6dwWJnVm8cjtztsQEkRX8zffhs5VfhXrQvDm49FsSBFCMyqc4yYU7ieaEK2o776z62",
  "key34": "pfoYeBhN3eC1F8qkmCNWVkAesH6UdAhQDN9uNpbwNUKTpaFtaZC4nuPQo79EVu8dnFyF4FSFmKbSfKok276cSEt",
  "key35": "53VbHxVSvq6kDZkN6U4DuhhLfwyeHoREg9oaU3Neu2XSEWaDbMT9jDLgdWa7sUiAbv3rzpc6znijD6qL1Bv9CtBd",
  "key36": "4frVzHtaqrbBkJ8rgbfin7yhYwMTiNTDmW6WXKd3uBNQxLgRiTMDW7X2zVaaK1qXbKfkJDHGa2TmjNf2YZMifDCD",
  "key37": "2EWmNVskZKfSaW4G3j469uAa2xLgqFZRE29QJff2NN683rbrp4Peh1AJ6coevY8DgeWjoKpuGwMQDsuQ6hdaQKoS",
  "key38": "5aAEqAc3Ds6eNY5oT12F1NDiQTPkFDm49VirV4RcxgZYxXDQbZACwVaVnB7rMDmAgmVSLZ1rZVrTcC3U9qWsC6Ro"
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
