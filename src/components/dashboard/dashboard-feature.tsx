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
    "48ABjjMaQp24vU57Sknzhuf4xn4DpXHJuuRJBhJa4UUdmVnC8PXLc6dJs4CnmcqzaK5kWM5JXyL99ctuaitWdHQo"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "a9x5qMULKY8ghP9ULQv9ZNUfeT3hbncnd9SnyGArgKPVX1aoV1hnM4n16tLDne1UdyAY6TtrG1Yfo8u9sFJGc7G",
  "key1": "62BMxoqRJRas1fMX5DeQiv7zJLmc2FZoNxRVMUQTsaTSExZxZCuXVRW6WZHwN19SToJZUztjLDjYKHzxLrmacj4S",
  "key2": "5EbF2HMp5Ri62jwJ1BEuPTF7NCXLfQ1gUiyz27arj4yCihZY4FbDxAsrdSXLvRjqbNA57QBijwWpaWn969mWbwZq",
  "key3": "4tSx7ZmLAmjzqBkMwX7HdhQRhg48fjuBd54Afn1KwXSjGRmeCYc492Gmzuj5DrtUwGaAGPtxtTheEKdtHDq2JqBC",
  "key4": "rcTgYLfsovogLiQf1j2Jv9fvBV3pxjwnDfo8CECdTceux17t61CMGdyS5D79iS6uQYeJ8YgBfRH8DdWTuUCuwjB",
  "key5": "i4NfzvX3KqwgPFcojjxKgn7YKCmpaJ4iUgydPdnoW5C5c3MPXbqbVEqnD2GyrGWC8Jk4yXjC5ihZG3873a9Dkd8",
  "key6": "3rrdnBAXSg6NkUdk3C2qmJpvRq2ykuorFV5eQeJvJJLbMXZN5tYeMtzLzghFB4WmMwD67A52H55J4z7EQzibKGPN",
  "key7": "4LJ62JHni8P99yhY4QZAhFMA1KyFs5wpANCkWLCTQ3osgu9TFYP2rXuJahHxhkUJKWAiCbNhT78pvcwpU2U6z7ph",
  "key8": "26mab8Skz7QR3GkTvtoeHSuAWanhoatPiQmM5K9FQg3qYokx3K9cw6ZitVJYXMobzBk93rnJiobA2Y2JMxrrGVaS",
  "key9": "5R1osjSd9yJ9EDKdh1MdWZUHY7Ysqe3xzRayqpXwC4BCPNF68x1RfeJUwtBEoeYWYdeDh4AJzaeVp7oiE12D9STU",
  "key10": "2Mz61TGmMKpbL7PVuXoJEAN7Rh3pbAEDcrgau7ufnxBPVVXhHWvpJthU7jMCRFKFCPQeygP3j49xVRSqpN9LG3vT",
  "key11": "haEn4N85MAK77AwXVv9vwsxdzES5toJrkYX8wHpFbAUhSVLjCXXVSsuQWEegxynoPech3SPb1rqvy4FunR9UvLk",
  "key12": "46LKEafR5TZYPcPR7HjxTE8pZK3qvmsk8jYnYZtnuxhnHi8zC7RnXLt48TsRHs6GNxma4CkSFdR1KKVt2gnc8uuS",
  "key13": "25i6ChR8pSEKBQTxQpQft6Zw5twcCwHxREdQHTEq3nESDD1cZ82p3EMoo7NPFVWgfa1NMFEWgNEx8F2smWf8q3T2",
  "key14": "5f3YPKP1LbAgbcLWeQtx1V8M2Pmx8Vbhfckp7yLNn7GZK7ppNudi8SBCupgrxSzuev5L1H8TAxSmWdVbRB21Asxp",
  "key15": "EoHTzb7rM4sBkoCvMiSEhm4gLvfvtNCJGGhQRTTWN7CREmBc644pBhZoryXifDuZ48FbVk6T9yTbPiBujoaPG9M",
  "key16": "5V3PcwHAQxtkCnBEUMt2EUrbbzx5cWzyv3ZUbccr5BzT8uMqjnstmLEpgzrjQx7pMcxvnLkghNkXC84dqs6vYBPY",
  "key17": "33YofN4QW9UhiD7RBPPvPdwYdE5hzPN9oNZFD39wKuLZKia2FkBci5Fbt7dh18n4WTtunRR1tBSUU5BZFxQeNQVj",
  "key18": "3Ndg9g6SNMzFvLRvCmdcXEycY7XbPKmEbSCXzwwYDRFfARw6jvmy3AiwMmH2kWg3Nv5m2FrrcEA4zPeoHhbkW5my",
  "key19": "3QizGAGN1V2sMC5HU5XBECkroTGtQSTY6vgfCte9ZmTVQ9vzkNBRmfNigYFDGYSAaD8ApMPKFGyMD8htaTPij3sk",
  "key20": "27Vso7VPDXmojzFPCLSipg8N3eLqMcQZDYiVYPHXvcwySN2Kq5ZPhijWauuGPbBZeVdH2PMNS4rBXSYFh5boDQ6T",
  "key21": "4iQj93j527MyJHm6fVHFoGjbYdaymwiujZ4P9sfDEcewdqyPtV8EyS9uNqc9MHRAeBvRC792vDJoZMK4NJrSQdKm",
  "key22": "34xbUKxP1CR9tAkehcpUKbBRTLRNajUax69Lf5ZFvhaBYb97P51tY7EtRXVDFoJdbfhhbRBvVkFDwupnbbj1icGd",
  "key23": "2gRYbrr1tKJDKJvzCoo8Vd7f76uLsKX29dTQRiu9b6xnjwtYD3Sp8mbVZDM1PsvJUTvUdf2LsSiA52bvij9CLi5H",
  "key24": "4riVUcqcp1948qFnCW1NqneKSTc8uw91p6kzth7JGAA8PpvEB2JgCPXtWfzPz2qHY7Xfc8NTyYP4n5vEVoNimcGA",
  "key25": "5bvTD6ks9GYSurkRnDZasfXxm7ySHR97uxAsBqvgTaNzXk7wrinNopv1FSNdsWA6fpBFKbw5SsfYioNV9ktpd1qF",
  "key26": "5gv2ishtZdgkz6FyamgQLAJ67TToD9amsquRzLVNkCa5BYG4mcvFEXirKS7KCUiJR2PS9T8xJfZo4XHcAYQQLn7T",
  "key27": "3gyJvRP6uxuKF6Yj7gNFdwBWZrq3xXiuuaA2qEEEjf4KCfJ5p3VvRWkiCow6WddnQqhSkGVbkUg7rc8xuhhxhk8K",
  "key28": "Zjo3Lz9YLHzZn7q132X5Cjjjm5ktHfvy4vXGka5zk4VrE6dvH6d2maENnV9zfMA6UMv9R7G1kFLmXruA1L6rg9E",
  "key29": "4woKFhL2UPxKZyntMkZSgXXy3yJLoJNJjSoik9ZfYcmm3hSoUpbhf84BtWLr1yztYvdQ4fanLjkj8Pw6nyerpZ6",
  "key30": "2nJwpjPPsPhhfLpG95YpLaeqjT42sPksAq71Cr6b4eV8YKQT2VXDRjhS4bGHMfChsDWodCjKmXBD5CMa9qRN1FeX",
  "key31": "4MzfNzWD3AnEfeYzCi9B3TmEKoofxAomhZXRVcj4jCcsSJxDBF4qPoKoK9vpvbk3ym9LL4jLpgQnR3dHCLNx6WGK",
  "key32": "2y7xmSngUv75xt7ABYYqroDFgf87GCYciEqvZWAmkHB4RJtqNS4SJc2wDCtduKdVTBKfnnPX9LPUSDimku3pi5jw",
  "key33": "4BJPcEGLRykbQHGehATQHHsyrE2skT7omLX8jm3Rrq4YiCtT85dQYCkCGvRXNE6J77tyYtU338xYRjB8o6uf9ceb",
  "key34": "26eWi1vHtmKMMY3j1n3T2oYfep1uPfRefY4oBUPNdRZtFJidgvD16wPT8wVTfUVfyy9WGo9KmJgj9QqTLYhNtiSd",
  "key35": "4N8HnskZncZeZ4WKse4vqrm2dW2NxJRjVheYydLc5a63htHiA5r9FJpYfPhemV6fj8UCYqey9CipmkTMvegmjQgj",
  "key36": "3cDYEXvURrv9oeuDZ3zADBUtXWtiFGCvMmYnmNMScqqKpWRLxH5EtcDkakma4CcDSHvNbqgC2DCBzv28vEaaHbqX",
  "key37": "4w5rhE8kxa7jRYYqrKALQaEemcmC6tHJhEnDPsVRyvFVbvmW3rGD3srvXJW7gR7gFkMi8TjfCphsua8FrwWjrhAt",
  "key38": "5VE91cnM1iTddrQrAU71ooTbXjDFSfvCJmP24q5Ta9hZqr8F2PLVjPTSduDy3PdXUpDwcZ54hURme8ECWcmM1ehc",
  "key39": "4ZUraenPeskNN5XWSKVQtthKBokU7EZAehGYrQjsZ4PHX5Gv8EHw967HmRi34TLC5HFrJLppG1JQhLvosRNamwij",
  "key40": "2rDj44AjuCSiXPq2RVvDZdsRSjFy89iuUi8Q6KUkxSFLbLSoVSCR8hxcjamVx4iDZXizpJgsM9D3fW2TdvrZZXzy",
  "key41": "3DaT4WWUueM9nJYSnCaweuKmQjcyqywdNSyUsQjPQaCtRNyDmNfHGAiaeBUyvNxREGZNv4eMkMDmSUEcbSkGVDhr",
  "key42": "5yr9cPyej86HgzJE7yGZqL3WVdn1mWvdHSwVJsr51sbiiHCxQCbFJHozCP18MkpUr768frNaEQWNu9tmEPn5ZwUd"
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
