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
    "5iCETAxwjiDMLtiEGBN8mceV4AEryxcaYXN8zUKV5ZXXQjmAP9eWWxh8ChFALzNRLArFcRhrGxcXYbMmzfyDDW1D"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2reUwM2m6PX18dKoZJvnm8G7qfKjqTKvoNRzsnrQ6Z3tPsgG85YnMdzKUXZKWkbMJSLdgCyvRoeydHmF9xNiEUtp",
  "key1": "2PNvGoMmaZGY1BnLdnYpvUDNWVGjEZrZXVGGJAe9RJySSq52R6s8whfKDAdd4HUceq1fM8BCC7rsgauk3JTGkkmu",
  "key2": "8xFRRRhUKGJUXcdy6sKZydxfJp9nzHRB9zTnJg5uCL5T79LbX6D7AzVqXczYLg8oeXXJ2WijG1PvyPbPqwKKfEA",
  "key3": "2Frhr3wXrjKvpm8hs7yyoJPYNCHsxjVDM4QSQnArG5bFXnXZkScA3Nd7BjiKWCEPt2x3R7LVdYRzhJvCCsPdoDnL",
  "key4": "4aE93ED6eGQRiwJ8Xjzjx824urz4ZJxSMUGD2XSd5Lgz9dVDAoSAzQgVbr1EjPVZT69VKefSTRuS6tSyKd7XiGin",
  "key5": "5SDTiSZ7QrMJa8EQncX82NoUP8rKsU8G5bLCMCMzn5QgH6ux2xVeGDnTD5vNSsPnN7rxGfEBZLjbe2JpEu1vs1wk",
  "key6": "37CiuSwKyLen9Y4oeRZqarnoCMKJLHzAXpA7SpqAwS9GybnnwFmis4BbRgwJpiEqTuAroTAKVzoYe1F2wwg8vJqW",
  "key7": "3eXe3ExcistXw9kg7YzCvh2JcfZaZb2pUtuB9qi7V825a9Pzkwxyzh8CW4WPoVRUkWPYLXMUJtEBDwntDf9acnuB",
  "key8": "4xxXyYkPCoQixzW2y4hRA5ra8ztvnRCuh8eJPZufDaS99aDr8MPq1suuax1j6oPWekdyc4DXsJnetEj5a6VvaWJW",
  "key9": "3jbPEWQuUuwEdowSiiwZy5Cx6vR7SvYThuKXWmxZAEbYNjHbZvv8oLpVkvXkpUsE3rrarXcDgauZeX22tRJqixVQ",
  "key10": "3GKkPKhg7MhD4JeuchHJgPWuyRiM3RrGBNB76is5jAZoV3S5V7FE5VrH9aFuBWUV32JuYszqeTkKBpyfhKFzweQy",
  "key11": "2PH14GRW3z8XkJER26UAT35LweeQQGeDKJPhXjpt6qhveWSKqfJ7rJPnfYkCQbANZ62iBA81hXN47wd2tc1oD7D2",
  "key12": "4TBr4ZDbNLRdpWq9D2iiYqYYJPGVd4ZgsXcEkvZ3EHtHxCSCZraHCj1tiAQMfAqw1XG1FWXeRUMjDCgtGPvP2eDQ",
  "key13": "nYJpB5TWkYxSAvA2iNws2BLLvjFoJfo2dt5uKQC3wNCTWX4rKGtXFFyoyGjF6e9EbTjdv6pGGGwYPENDMKYXKop",
  "key14": "Z4AjPS2tkUULANpj21PcPwKL8AynT9vksTAFHxFqd2Bvw2yBdPLrFu29sZWPNWsaJwyEfWAJ5FVvWSS4Dx7TGT6",
  "key15": "4FL25MdyFs57aPzom51gJY7pRfHg7smNWVu3vf7JmE2QGgeDA7etPA6pifo4YVLuL3ADDZi7LPw6NpXMcfHpEkxe",
  "key16": "4ZqmL2hPHV8ozfhhSCawmcPMqPywgmnSXJHKx94f7Lm8c9GBsJuF9VfT2Kek4nGNYWKum1nsXUZPstrz7Jry77XR",
  "key17": "yGK4HEhmhgcNgKSXAGd4VZGTvyyCdxhuhnVVDyLw2Tq6hF2f5cgRpc1eY8rHanmscuduyGuV6dLCoezc1AD6Aai",
  "key18": "4riC1QYcm5SakLp8hcaS22vEcCwEUzVtHb6KybsnwDhf5WstJCLzunwuD4qibwxNdgRcryUKzZ3QtxJAVyEJQo4h",
  "key19": "5oMfZqBM8rjnwkT9mn2ss3ym2FBfTPJDWmRCW3uc4gULfzzpJZaRDXWNvs8sfmRqKZjEgM2DJiqcLgJD18h2Vuje",
  "key20": "mv2cJw9n3AwYPxud4hKK9HqHY65EczZYNyQX1qTF5LnGNAFpxEvqhG8zPbizwQFTaJnBPudjabzBpMBkt6vS2tx",
  "key21": "646LCn4KNRD2Lwa3ftWG5DU9e7axF9gvXHUS9MMjf5QawquAHvPP9tCWKFnhhJJXPpKEwHmFRxCiLMXasMWLYpQ9",
  "key22": "2AzuURrMWwnFT6DxWpbmTW7C8pPQNzMnDSKn48yvyNCKpfJwW7DoJH2DaxnQw8ETiHuec9Pzxy4putZiT7CN5jxn",
  "key23": "54XbgUH9rgmyWZZS7oQxu5qDZcHYJMEypK9zoAdg398kdfACvWuEYsZzuMrMgZcfNozFAoihacFZ1QCjB5a8AVkJ",
  "key24": "6qjU1cpUavFYDdKwokuS2Ufy4LN2Pw7TVLNTz9hojmJDUCRAhhgGuAuXvyaPkT6fH8y5qZam84mhW483N7mgeUz",
  "key25": "4wYiJaw6BrpP2YeNX5A48ypPrKJ1KBNreZaYzvMawTfvQcpCkAndZ2j2gBYrRF7pQNBGF226oeYJveFxok9vgLRQ",
  "key26": "CWYoPszQj52n6Sw6zpxxF5gDkWhia1CE1PxYG8euodHrQMYVcHJo8LZMSEGRsTo8mpFLfAq3z1XFXswzjRdQKJt",
  "key27": "zGkSRM1x7wr9zvWb2Ab31MAyrdCbKsUsP5HvMcP4Ss8tygNZZDwaKJP5sKynWwE2Vf6zciXKndScuqveZ4ecLsu",
  "key28": "2P4z3Uy2Ef1155922u7zVHRReD66mJ1G5UN9fC9WcMhDmokTM9VmpJNvEuECo5Z3qwn6n8YzmFuAaq2PaB7fePed",
  "key29": "X2QReNgTXhhdnFS9eoZYhq6PQHAhM8BdMtGXR53BtsLs37VTZqJ6HwzmU1UWtEFcvYSP7NNYw7mQrfTFMF4VmoX",
  "key30": "5i448xwbjYdSKTK3SYMqsvizzVmPfZVJMw6MMZJwcZzYAZ4Jf2RP4DuRQqK5GSAFCwXEAURfY9DE6ev9hrYUbgPL",
  "key31": "4tsme6RfmbLFghF9U3WTfYUbzzahuEUEgiTjfwUrKTxqeGRH2iqyZEN2osaTJor2iDCaFai6Y34NWLd7hNHWTuTg",
  "key32": "UvFtxF3wyDvXyZ8jcYdVGu8nWnxioQg6nA3GSWoTnw37KmnGuWkVeYyWtrd6SnBAMasBBKHgaSZruJp8HvMrMAA",
  "key33": "5yLpnnR2a7HqUpnQYNV5zd1Dw6D4NUUD4dVwY7FjXSiR4ehcTT7iz4JGKSMLff26GGRbR8m9wGQSMcF3irrLFKHK",
  "key34": "3fPbLtjxHKwPCunZBwsiEMLJ5Tc2hoRSKBR9UPMJUmBXjD8MxetJq8GGshKUJGDXVENgcKRb1SLD7s5kY8fbjDG",
  "key35": "129mmCB4YqfsGJ2ZQ3g3yV8vTdJY7S17oozm72kKBr6DkKTuWviAiyMDEnFjoQN8jqy8eRR4MQLEcejVMT74zkoL"
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
