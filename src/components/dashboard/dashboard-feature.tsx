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
    "3DXiPf8tKEGmPMinT194NbPpxmKmN6bsN4po8FvQjvxpvJZE3MKq3WmP2S69J3QG3EEVSJ83ERWP59idUdVGCBqM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3Du7L3QkkYuDpng2qzZ4Cx1Jey4WN3CTQU3tJf63Gnz2jeQJ6JVwereopNf8LbCzD1Q9PsmchpHNGc26zqkK4i6R",
  "key1": "2LnQdZre768QRw5Sa3J4KBwzN4UNu2DTvKyxqtBbxfeU1pJuKTSAtRuZG1oGTqfVyQt7PgGavH5WB9LkmmdFi52D",
  "key2": "c2qv2xtujtS3AJgyptDkQP1NqLqR4Vc3ww8xrAzvKsYzsgLvtCYuWDtvZhruQMrrzUwVqDuVndRzN9NS5gJijMk",
  "key3": "38VDkKjMfxeLdsK2f4pGwW2gEbWmYHjwF7kBCCgfsoXLpzFyYxY1WS6n4F1qjLbWmmcRFtdgwfQLmsdkS2UF22U1",
  "key4": "3fEpFUefQKvRKxxZePfxiGyMGM61ZmpMjCJFyij45aXSp7PYPLHNdbnkrxgp4U1E2ovNfuWyXeAm1zqJuc926vWw",
  "key5": "2TzLgfFhtCuTU3wi9sqrmrKHTuLiv7BCu5d1rHhS9jHYqsvx8dUbGrTVsdGKi8WCjnCEx3rkwQqkkZb6zRLoik9R",
  "key6": "2BgxmLiTsuZxRc9jakc1soJQ3JxGVdRR7fSRyVGJkAmtwPjvGxBpyMwpiKZg6StuD1pKUnLC1YuwDq2vSAo6YxDg",
  "key7": "28AgG1FguDuKznGTfJXTECnw6WgSaNQfiTk9H4DA8hCLGCRB8YA8gzyZ45LFB3HresqcdyJvUaxhV9RqaP8yzEKW",
  "key8": "NgoC2vJXZNVQQEex99fEGtm8tofWbwXxvwqLhPnTDoj6QyHoJqBJxpj9zTjHMdECh4badqRmdVynjtWXMKK7GQX",
  "key9": "4hEougwHLhAmQnrZPAU3vtFzZJ7aqxCz2QEvgPbKY4oQgMQp2qfwLC7VLLoJP664AwUxUQ8p1RrjoAVqpD6vEhV1",
  "key10": "2q5SZLMcJeFE5PfsDmouotoARZ18DqeGB7za9Bi8GaDtKpzC4MLTSty7wHjA89NL7ZVbrvwiiLtTguew9TjCH57M",
  "key11": "5pXoubPexgDyoPFrRugU58PFPLnEorkdsBX659ztyD5ifKFapefi46kZtcQJYvav6Z9gUambuhRtbJDpzDFyq4HC",
  "key12": "b2fAUCpmvPhegawH7paceJMSQyCRfNDk3xvfoGmJdD87Jp9YSAte9oPqqqcc6NtqfsCZ5GvVPMpuRDZ65sNt2Wx",
  "key13": "2ZxZGdXoW6zmZRYXhEx8n6RcC1s2JHKZ1nPod9Zfh1t9gdMxrF51k7MTR3tx9Avcd1m2pWdHVnBDW7bygrdkC6LP",
  "key14": "5UMEtgP2YymnQfRmbcz7NAYUmoHsH6xjikB3bhV4gU6yffJzQNRaYJoETV6ape7j8G5yaz45zmm5koFtXpSNekBX",
  "key15": "5pWSgDPPHdyrZQPWAbx13hAUp4cWmNFKKYMXzkqY2Q1uVoUfBASD8wL9u8hi9rqM4M5MGmDCVZ66WUD3aLNWg3Cq",
  "key16": "51GB2oHgC7ZGjH4iarQUWC8xSXcynAfq2Xzx4WVzfrfcsw6Uih5xbTAyqXeaBNFoRQgwwqQrrF9X4q8ZPQqE1DLd",
  "key17": "3jzrMcZTA3L3ESDVR7w3cg1kPuJB8kP2mNYaJ7L4g7A5ufWFRNh1RHkcFtTYYXc4rTHQS1E55T96xrhhersMtEix",
  "key18": "5YdVxkrnLawcaCvzZ5zmaYUr8eUATNMy3Szxw6GVtcX92qiPQ1bo2wXoz6uGLtEBrsP6kb8PPKDnr5BazytDw1jP",
  "key19": "451MgR8yHCQNCmADkY2MCFrRu5QkptWHSapbBaTzrc9AhwRpdsE1YjFomQV4W8XPZ9HRacGAPPga7AEaWHKkZGf",
  "key20": "2oSUXL2cxZyXdricvRUFfq56Z9AumLrzPqJ4hB4rw1YsWs9sPhuvpow61dBLMP26KLo2UbccwPouxqfWq6z1iWFD",
  "key21": "4uKsGWDYYxJZVAh2MFEVuU7DQuWmr3VwiMzXyVaWZuYkJWF83k7ys8pR3icLJ1NcZwxTuwDeEoAXoAxBRJ47XYvB",
  "key22": "3y3kZ4qK2VUZ9Zbp1S86g4ShymmruHZA8D9wa7ouYSpD2jzGvfEsARd1LTGx899oeEnnfXfUgeS9pcV9W8NqM4d1",
  "key23": "3eCmUDs3Xq61E82HJmUgtm7VJVKDLj1n8qzfCzNKL2FYcGxWmjrjThUS4G9W5xKYcFgbEaYce9oJZ1hanAGLhdgP",
  "key24": "2wfqwqj2eLDtaxQbneKK47BF3mKwUWUCcsgpmVsYYDnrxAqgFdnZ1mpBTdwiBKgGt7pFwE3aurnFgnaGCY2b4iqB",
  "key25": "3exExr29JejyQXMJtEzhtb6nnoxdhRoF1MNVNVTGrdi4ytHH6BHtnGZjaipQ93qBpYhajWeuYobPqmjNkJwVQzwc",
  "key26": "3tW1vovSkt5x8mXezXvE2iU7XBiReFtZaRKJaSwSKbkivBBs7KZQArLgywFGrwvM7MBsSKEEnN2wETL8jswNmPPX",
  "key27": "5iMt5M8GAexq8XcaB9W99rbYTLM4Dm8HLnusRo13pKn12VFRWJUSgqaEzvnLEr67Xtu8e7XdyDbFoyS7PAwUXyGj",
  "key28": "kYHKdeHUKD4R5ZCakVnahhhUQJWkp3d2FxvcWH2NGysrkx68yLwCG85NHYECn3Afw7YDhCqVuPNpsJ9Vs9MuuHz",
  "key29": "3c7cKg44uiivKvRMk3xYGuuwmWDLEb1tmFAqNnkHTVMbQhYZNqx4VJ98BCxX9YA4k8bya11hvWKQhNP7o7SVkYPb"
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
