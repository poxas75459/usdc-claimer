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
    "4rHbWy9REfCVNr3rtMXkgCLHegzvn7uHZwFobWpKPfrBXGAeWJKcNUwVYYZJgonVpfqPfhv8onpYcPX2c5ggZwXB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2HrPgvSLjV2Mbk1rfk4sS2fQChy7Q82hKoE42L73LESmqmZjp5jvLtm56xfgVR3Ubboc5fsDHVh5uoYKXMM4G5GL",
  "key1": "5uvvKLmziBPrAnJiYX9XYX8NBzLhpQbJfj6J7y2xzaCfbSvx1bmfCWVFAZruPWnPoe6Vth5oti8FuVKwgCFX2JRE",
  "key2": "4FWN3t5fJJH9REFQhXSZYYx3SxB8MhLTF3PoeRMBD99uXW21NYfjt13rDBijZDBAeeJiTi9JaM2gktTqtS9PRb6p",
  "key3": "4FLHJrirdqueTjxQxKzomzsPy9w3oYsCWv8si6M96w7FykEBkiqArLSVW1RkkXT3SfBfz1FxhHd5UMJ4W9Cu4bge",
  "key4": "3kPGB3jjSEBJQcHWhPxe8bKbJAhf3URvqT8c5cpoCSzDyeJxUHGD5VY9UwqQwA1ue39DNYNWcYHwqQ5CimXLso6V",
  "key5": "2JED8YkDG3AQ7FVmtrsaFgc7Bu3ipYEdEUA4TYa61X89iURV9QpJP1D87LJYH3dFPZf93yb2DX8BouLep6aQuuWS",
  "key6": "4xx5wTQuXdU2Gjx3q9h4iKN1ErkW52hHEwny8SoiDYPEvhWrJWvsNcZHeVt41YBxiewJGot7zr7Zgiewc1YwmXAK",
  "key7": "vLNn7o4QWqMnvYcgj9KoZnsFyjshtwYFXiwtgajK5CHbw2XNDocHo61g3qZVV2E8Q7kFdETdhyvUMrHmmXYtovn",
  "key8": "3oHk3fAdyy2JW6ctvS4PMn8mSXUduHPsPCVwgr3KLgBYhXtt3aB9CjGQvxJiTvSTjbNQvngcbBZjFHmBVJUUjsRs",
  "key9": "54XLhGBMgWUYHj9WebRTU65V7xHxoy3627yWjcUiAN9kpJWiU1CrXFPe8x58nLJPw58YpqDbcNoowfA3VAMNtKSS",
  "key10": "4uFpsuChrY4UEKtwBJiw6X9TTjMRYTEsv7kYcQBxSYEUfSofJqQovVSK4FsJ2ZiCX2xeropKheMvFuc3UzpnfLD2",
  "key11": "nig41BmaZeaGp66i6F7hx1NsJx2MAbDjDTbdGQaruhWxcNTM3Cd5T8uX55aeqqXzyRiFF5RJX9Nv4zQZUpQCNgR",
  "key12": "czHSuC4gghudfkfsvuBHhnHrtSi38zUUAxMJDq8fZYPKrVRAdNQzRAdoXLsZ8hWaFn5WJieDMDxadt8X9zTs1rX",
  "key13": "3UZPsezBPsDoyWc6cXnzCgDttsfctkzCrcmM1fo39cfjYFhZgrtTuxv1rdSEwSNNG79Cy4GBk2zzQABTsSEVTcUP",
  "key14": "ASzBi4o2XowVZ4egSJXP1gym2rvd5rjVBUUbWswk3c7mVVyGpygdzWRVMUSVrXHi8mu1suHDbPNkh5tJLyphPrQ",
  "key15": "45n79FKMcTtTKiEqeV9bJtm6QFSyGiNEyRPfPaYZk6vK6WZcynLMoh9ttNbRwaRDdVn3Gm78zqE7RvWoCXx1QTin",
  "key16": "2zMgB4d1yaKfNELcvLWGeUsYx4kURmiXjQ9e4VkqCctjd4hA7TJfb1tyS6R5fMeRNSRuEsTVAe9t519rGkYahcEA",
  "key17": "uRKvpaHRQn2v8rHzGULwH7PTkXnF9un4FoThg5vXFRkffGe5pYTMndyk2LTb3q2dp43R7j5qBcXBx1Y8HdXJjRf",
  "key18": "Hcfwgs2478biP7inXW6HynfsaHtcVvQqCo7z6NY6KWzMnVTpvMdcfu1Kx1mX8jdjdbGtea9te6cQyGBqy9quCLi",
  "key19": "vghba3VVjj9iiSNZshjUimAhFyqQfbDeEu4J7N4Vw5AP2qFLJe9okT2NUmutZ66U5b4yjwNzEycx2xmDkg5oQeZ",
  "key20": "5bVecLjqzHaqWXe9TfD5Y5wxAHCum1pvi6KJXcN2CruMN9oQjwcJjXD4E6BA9boDzBiPosjjjvjx492YyuWecq8q",
  "key21": "3o8RNeFrZGjMsiWkEY3JXQZqYsbP9FHHR46jXt2Ua6AEsLCK8cUfd7ZMcZXHVnsrt2BdYyuKv4cGdHdz39dKTH1B",
  "key22": "5eN5EJBTVKWS3cCdX8WWAnPYC8mUBcjb9Yyt43nA6h1QuGtpnnwH5f9pD6MxyPEjNPea4GhYZ7TedVcedoc1Yi6X",
  "key23": "2s2Jq7f2hZLwxbAMnYjmXCx1MRGswiLMgQJ73opD6HPkezHAjtrYAvF1YXeyMjL567aB2uHTYrn73jMHU5XSVstc",
  "key24": "5GEJV1F6TMUr2Vh3LFv61LtmoNZ2KjHnN3AqGQPToRHLwTsBqWeVmfpUzysnWwrFDpxd7ht2Htw7J32L7xk5ivjn",
  "key25": "4c1k6VBBwoZ3gVuFVCMtxR1GQCMx6CTSrmMcAC8UcgVHBA1PwpUuyfGsU7byq66mfwQgCvq1qgiWhnw7YaMPsxe5",
  "key26": "KQN8VYeo1yKTjjZaqq7Mumg2Tdu7eiZrv3wHHj8KW2XGaCqG2i1MHyNMs6QP9E4t3M8vLavLkZzna73jNyNoC9a",
  "key27": "XzcgwaEfUbkmrwesGbSJJjrJunWowvYm6N6N1sZYu9nTyHZ8JbRsiLo6ycUT8v6fW63yryasLhhSkmtri9vwafY",
  "key28": "22ndGnbxN4eBoS8Dksf1mARcVaFS3tR6aR3B9nEKx8FAQdce9TurEKA78gaYzmzZbpFW5whRy8zv9mh8BkL8HncT",
  "key29": "521aYJbK8oNE7nRP6X4ZKFsTroo4TCgeTdLjkXUBvND1qvK1gXGjG163d11yBjsyHdUjmFyrUv868RkWhYFgGqwA",
  "key30": "3dJKfdxk9odkRriYScgCDjMyuC6TUr77iCoKY3wXFFDW9A3CJiAVBDhwL2Y4WUhGXrKGxsiyEK6d8wQ1Yv5xqe8D",
  "key31": "5YqZppHv9QVrdYKTaC7E31isSbkj2wpga8okC2pUszfHp972jJq9paAjkt6ChqL4fy8EGwvDVMNTBUshVRzBaUe6"
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
