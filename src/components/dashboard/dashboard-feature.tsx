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
    "5iX1uvUKJDauxv9wrx9jZgCM1tJLWEabj39nwUUvrnMVPHPcRLhckn3iJ6VmvvScnmx5zYpAYj9i1TmD3zshwEDH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "38np3Boi8B8NY6Q8vZjL3n4HD9MRuHXkqSAXMXc1PcuNSxzHaBsFREaMWizKJnugfUbf6uSfmCvTH4oq95jkiYbb",
  "key1": "3Ps9ek4eQFDGA4uhNmeokCZu4NyhY9aS4tWd8DpwNauaV6UmTyj11U4eRCMUwMb1SiCQwqEQ6nCZndjqviwJ3KoQ",
  "key2": "2ZsRQVy4VFYYZmC4NqNkdwf8hxnyhAaCUMa3p1QiDC1HwuUMPaQHLnN8aQBivaxfxHjg8GASDvfSPTPAFdtVjJzk",
  "key3": "659gsi4BVXxQwH7wCEMzrzSYeidYxrjXEkzQaKvsJ9rz62riKZEdpbUeYaUXkXmEqyEhEWvEp42CPqEV3tCU5ZMf",
  "key4": "3MQuJijGWYuoAx1YwrsrNYFNfnr9fZiMpKjo6M8eyL28YTCcSyPvR5hdopEZ1FDyh5gg6KhxQKJ1cME92o3SUNEU",
  "key5": "3q1nVVh77TykeZaAzzHqmg8hGn8TVb3N7xhaBZCgSjKtJMUSTyVuXGUvbm5KkwG3XuWzArmKDDXa43CJxE1EDECZ",
  "key6": "4edbMbd5wuE7SyWUg95muw7SadwwiLbcx5KjJH9PHu66Yq2eV89rsnScL1xMg7wBara1jgJn8C2DLV5uqxdFzAmj",
  "key7": "5gs7KbuefCKD93okmxygnwvwHZnrgfx5xKQ1XUQsqT9S3VFoazPuHpxueKFJbvA73gB6Xy9mkxJtrTu5VM7LukbA",
  "key8": "2ibynYPhNUfwxCESVTW1yFEsNLJdpLxuPYmgQXLabkyEHkGTMktDAUo4ortcqaY1f8xow5Gv1VkUJJSj3Y21UmZd",
  "key9": "3XWCkjLAxzTphkN5x6gEqNd9vHNaMhbmJxcAuptaNsNQeo9hNvmadHdDRCZKiaFdeEYScpshFojR81crzhiYdFzo",
  "key10": "2F4oJWJk1uS89RBXG9EdeMa6QmWAGF1yhmzKzHk8asRuNiT6wX6oZ6uWxefjTh6pdXPwQrvBAhqpURmF3HBd3PBp",
  "key11": "2MSs6UebiEyoQHvqejbgFAQ3ZMS7kwe7Ny25RATE1A3JddxirbHvJXudHy5vNfD8WAYXSW86WtFCDQkuWGstYrGH",
  "key12": "4GhWpBpPsHxoGEVmMo2QbHCJCDa9HFT7mgKAmHJD1BaidnySbWvUvZm8GW1gqMSt1QduVVqzMksAaXTwVLVHb3C4",
  "key13": "5HatCG9MCzRXpB9AEPXsgQmduq5RwbneK3ugvuTR2jd72odcUiV1Kx4FyWCaq4tS5dmEdwpUfuHcBuVyN4UC1spy",
  "key14": "4vrfupfdBS4LvsHFT5Q5nxWPZ8ck8HJyrLxf7jriGwJcuetsNFVZfhaPNWKogCEDVofkZ4iHbxEFWs9cFHBbCi89",
  "key15": "2CJZYtgZueKPgYjMYaaXhm5YZ1mj8me8n6aAt6StV5nYcmst7noeHTPQj6QaDVWsJ3ba17zLmMGB2pi8z3cUPPFR",
  "key16": "5V6x3ccBCdJnAc7UnJwbktAqF9TbDUzPgvcTkTg5EGTFCQzXkQfM1VWma6UksQgfeZW98HJmxS264sN1ZUj3Afvk",
  "key17": "2KPqxv3fLoUbmpnnhD7ep3WjEnUcE2YTke1MZHjmmP9i17SjwRfLj5rxhU8dFMGUAk19s9KHfgGJm9ivU5xVwmic",
  "key18": "21722rQb1UkegFMkFFephcAeLHJi8zXASWdZhGVck7YJ3v6HpHPiZksP92sFDL7ATdR2jxM58YJ52XPfBp9Pxzdd",
  "key19": "2xCCx22wCEtgpK7zjMaze4SsR8G3AutYuYur8rzJmz5pDmoTJmQpcbvLFujiJaj42cfGt3hwc6f7xUachFXCmMdo",
  "key20": "2ZCZiWKN7B7NBBjgsGTPDufKV7kdUecRhoUNrfXn36DYfypyuir7k8gfcNTowm44tN8jW4KgmSuPXyHvQm3sPqAe",
  "key21": "45FAQSXssqVjxwdZQPfXBqDqRMttBBbrwPVerVkMJdwv5ubd85xWkqVSGZdJ1bfkMLsnjP84RQQUsEm8tsT52Xsw",
  "key22": "2xADtfVs5RBSipBeNQVkmGVDwExpkuT5NxE8NvHTRQsGoRvesWPXVxGR56v5EGzKyBqbqCBTpXuAvdNuPSwVHBVj",
  "key23": "3q4HEPBFXNnD7WVUcusHVwWZSmtd8mm4VBeZiQvx2PeU1QbVm9MZSTyDLNRKj1y8StPnMfBP8z6oy3yYDYaTk2Ms",
  "key24": "2r89KRxrukRBBPGPANWpccesTmHDu7ACGR4XnxrBhGM4NrAiwVanq6zSK1VU5UPiRNm5ESjxGiLsFJ8ySvc83i9w",
  "key25": "4D6QigTwt4kbE4tSrpDePuGdV5dBDLV74WV8jpY1izLqNPgsZJR1N8UNtz2CfMLYC1uhmXP1zzWYa9z1DQSpLWt3",
  "key26": "4tErEwxFnb6XuisJPJjFzWgHJmQYZRi41D4FKuniTPiHkFRGTpXm2rvJ8wcTzSHJbK1vJygSYYA3Csy7ZnVSByqW",
  "key27": "oVDgb63NCD5j3HmdHVthTVVDw9cz3tEyeAKxHhVvqVnnhvhTE6xsL1Wmhwzo22tFdkPLuxw3Dcqcw4QEmRPZXQs",
  "key28": "3kb1kshptLweW8Fimgnsckc6XSWax1T8TLyZeR4KKebHiJDKgRsZrrGWqCZ7nHpU6BWcAMCRoVAFZDV8VvrTTGaj"
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
