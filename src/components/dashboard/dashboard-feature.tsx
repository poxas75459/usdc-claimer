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
    "22Ag62MrxEVkV6sygQaLqLjZB1VAbPVBPghe2eLimH3WqHZBxuX8H8yA9V5BUWaiVYXgRxXVCdXLiZxZY7vU4jZA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "VPsxQp7gaRymXZs4arBBfPchaWcWzLNs6sLeR7gzcAAoHA6HizSpSKYUZiJW78HYsUj8K2rBaJqvcuq3H92JhYE",
  "key1": "49ij1hcmz7GLE2Bfznw2Mi4QC1T1soML46KGUc9pVUSsZqG9tfgrV35fG8e4YueNXaW7CS8JZxspbVU4skVXA5Wa",
  "key2": "5YWCvrbz6VMWeHBb6hFjik5jc6dytXvcZezkqw69pczmJmtRfizuwyWKCJHkoPneDndnsrHV8aZ3f1xsnZRQkYmv",
  "key3": "XSfmeY4sygcwosgYxt7ruK8mRJM96mHXUtr9diQVEXt9kLwjH7AhkcYDagyS2cN8MVCWSHxmtoZK3jW8y6H9rRR",
  "key4": "5ajer49nUNDJpQ8QFLaTuvFuZcSTYGKxLe8ijFKEh4UWvJY3r5taEZXzS6smg5xasS6PxF9PbvAwfyhjveQtKMZc",
  "key5": "4ECDYeuBLbwCiMWGJgoQiDShgpBVmzqiAiJpTorw6fjWMxd6nPokRHXBgQy5XQGxokRiaseSXuh1EpawuhLRRTty",
  "key6": "NZ4LYC89Tw8kCBHywuAYrm3jqHKTS2ZrGuysfoxm9haSBgjfu2CECutTMY1JSHVxNHinzFiX1Ud6cwPFwKcNsbA",
  "key7": "kxdkTfU9TM8YdB7AcufvpqLaJksq2VXdJygpeMbUhwhgv3jRrjFSFDD43xjeEi1icyPy6RYxa4K3MXvUnmhwsVd",
  "key8": "3bRXrwE7An1XsoeRBSv4KHgCKohDq6LNayR2WpKGWWK4Mz84MAQx61cNLztsBVrLoyVkqK7ojrP9GCRQJfj7cvvV",
  "key9": "3kBPPD7UK5iyzaqNJjLeYVZxrrKVMrv4CRhoA3LAzbASFNKXmDuki1ovSogTMdouFoEU4UE2VTp3tLQs4HA16HPD",
  "key10": "5oD297pcTXebwu8nvuCx3maaToBf5NXu72KACwiScz9F719jtucGd4s7ALQUsj5oxANUhrMMyDXvebEAfPDvHFma",
  "key11": "Znu94kQN3dtVV1j65YVSyb5H6P7Vz4PF3N5tKhEh8ZLvFjwmf9nn9dcuPV2m35SqNLiWuwEyDa3hXy5LwX16yFN",
  "key12": "4cxXyPa8s9SKMxg3bAgNDSiDXWp7b1cdZTYKY7Kmk93szdeJi2QKDz3cU1GM94iaXT4iAK2MWt1253zhiuSy27K7",
  "key13": "5ktDXmq27kDkmFRCh2czs1fWw2Lky3UwqpgoXVZxbmcmC42XhaMyxy5ZcuaHirjpBq9Dxud3L3VnbWZdcJwJrbPq",
  "key14": "4hkeP1G3biuuTV8e8aubXc6t6Nn5ZDw4m9P4PzHRJxsivGuxj8bsfV26iN5fQu9hpnop3ZASitedN6uFYq3HZfjs",
  "key15": "4SuiF6dhhxavQNeoPgxzk1YCd6hpDMfqXqoSbWEaZXWftszpmQFM7VWjFf8Skg8jMmF3uaEmMtw9DygMm828kBcN",
  "key16": "32Y6My5TY132gUZYnhPUmNAMZxG6vKEVmNGci9wbdyZ7eof67sup4WuYzJ4VJnY48J2jJeGPEHoypvaFB2MTSbfo",
  "key17": "2FPKSmnwFD7niZ1oaTCvTyY2i4bD6bRiYBaiQQDeZ8EXW28i1Pw9vRjZktPCw53YYugJVyTmqg45bevedg9966qZ",
  "key18": "46S8L8PhjX9uKhTYFBAqpmbJrk1LKe3DmBiBjSQZe4znBLZRBytTKu478oM7R8uesY9Mgk2c5Fi5vXRgGo3oJkVS",
  "key19": "MGPF8EfEuDM8e9uafwBwC6QmxFGbDPK75vDXXXhCUeWqxFMrLK9PXNkfWKEU71GnNHVMH8ah5du2fnFBK9fBdeB",
  "key20": "uZYXY526kURAHNzbm3LDDFn8rxEyubuK1yEYjhCVMeQAmfi6iC7XNo6Mj2ez4EnvNqKx2KkzWTj6P6v6fwbb3SW",
  "key21": "2rf7CgfmgBQXyifZz9pXihTzvxdbfWSZSxPHhEk4rVk7Mm5Jiah23rf9oJioF83Wps9j8dmxYNZGAVUja5K3bMMK",
  "key22": "38n3DLXMcwHEHWM8PCp2Dbk829nSLMAsifhBn2TP69QFTk2emkMswiPhP3GdamuVTgSUEUZJ32WWpnPebZd46S8j",
  "key23": "DQA7nexrswb5wD4NsYuzxyYC9j7s8QZprothfwDSPxRatGmNTeawZsxbcgfRfMXuLzZMoXyEG38DFqtt4KnWaTC",
  "key24": "4yZUEk4m4ViKMhebsFB7qDYANN3wXNnUoLcJ4uMNHx2yhsSSybLFikLZ4rTpajU9KWGqrWWKc9wH8Lcgx9vdbfzu",
  "key25": "2rafiL25CGr5dzPQhCjb6r7yJvcyHVU3JHQ5EwnQZwW66LcCw49g4RLDhbKEKFpkamzPjuodeZ1S8mBDorppiug7",
  "key26": "3hLXEfgGvxxhkDsL3ZJZJRQuGthdvWqnP6mGi3x77xosRPFKjrQJkFoSkkQpRr2eS7uwmBVnjYSdNaNTfdM6HtKG",
  "key27": "yLgXubGNN3LqzSK3jtgL9JTV1NRPBEzBiHcyJMsBcWf9ttSV5utGosnRRf7xwXuYsHmRBE3BpBMi2yMwAiBEsVd",
  "key28": "5cnRqAQzUVAyo1urobYqqEGR9HoDSCjPoQNVLw3NPttqcLARsWUgCyk26SxQQjJTVjNPEttC5hBkSnyJLXbboN3E",
  "key29": "3NrXJFws9GrVajJxngb54jEsXxwT7h4Ry88CYKLUFA24oYj2wanjDp53R3Tztv2WxLsnt2R5mHHGqpw4npa3qRLE",
  "key30": "3qCqQB84QoctUpDoJZoKQj2qw676ZSqQykAd4B9pLM64vMFQPda5t1zCVB2TYt6fyF4nbXNibpQJZBSrLnBeQVgB",
  "key31": "4wKURbJKsfru9yzezvgyWZHqExbdFvk6tGkn43ucYzaJnzTzVwaccQbU1JpZEahBe7tmPiA3nWRh6BB38tZoFhPV",
  "key32": "29JhDFfxWzjy8FcxDQySLk4JbAkQDx7niouHyNmPBYFhH95wddRV5r4o6eAAx7WfPsTdPohC2UdnmUU639xQigxs",
  "key33": "2uUMETXV5Zp1sSdHgJGg1LNGMZV4iVEGh9DKdbEaXNLKSMPBXuJ7SXCAi7mBp9JkVM7CVkwDdTWQ8BWB54PXwYes",
  "key34": "4jDTPkUfjwgbZm8pztqf8boTT7erbMzMMbAJpdpMNVD5comBbmDugrBJDDCmoUS8gTMHZzxpy7dTDQbAHjeyMtjw",
  "key35": "dthH3VZXfiuwpG1jMufmonVcagAatK7HPi23UiHx9H7iTaALo5pBqKApHJNyeG8Xy8E1L2K4go8yDSpm1pAHL8z",
  "key36": "4VB9hjN5Uu2VQnmqwz41G1GRtMPbjtz57kxKCVjnd8mF5avPTm7U13it9wGzQ68AwrGFjAYnFgdrKFMVeDbmfGid",
  "key37": "42Cjq8xEtkCRLMNFBbW7LnzubSJrrwiX1sC4vgbmk5WxtUYkDGzYLMNboG5mzfsB2pCp9nNFHD6yN6Gp4bzUYbSv",
  "key38": "54z81UiCRX7EA4D1888ACkd2pNE7mFxSyWrNWyfhrXUMh7qo4bUdGbA8JLUspeoHPcVASAB7DihQmrNgDsTk8tKB",
  "key39": "n9pqZPC5ZdZAxkQbp5cNXCtdGUY5cigFMTLTiu5EK5sCj8b5YLw4ckNg78YKQoDrJkXQ7rvnqXyGQjUCdzuV8u7",
  "key40": "5YEEbM1xbCuqbMd4nF9LCgvN2DW8tEaRj9w7SC7eYoQLWhh3dEjdU6zwBdmF1MqgWsAjG1VZP3UbViNpdk6uchfD",
  "key41": "4Y5xjTjax8YhGip75ty2mrMYg4mW9mhWm7rnVxPDVzebr3kAuE6p4JzGzJW1Me7TxzeiFCht9RiVpXApbZUtPCta",
  "key42": "4jANU3Ucj8Thtf24X9Fx4T9c3QGizwrZqJTPFGhNjPhtFoRukdZeHmXJV8BmV9JF1HGtjAXiG6WKT5anUypZtaWV",
  "key43": "5WaCktcTGSeWovNB1njmYWN7oz8mhCbXe4V6zNuDpLuGZ2Nny39ks1e55TrNGRQyn4uuuyEyo7jPvEywF4H5k7eq",
  "key44": "5LNSyD4Xcx4JyL8Q4WAmRgpp7j1RsEMUTo3crC77CYixjEnUfy4MNfPLVu9QqGG5FnXSySZuK6KrMMwyCfoCB4bK",
  "key45": "5y7knccpKvZBv4DroQ4K66KyYJxfv1XzBy4Ww8tjrXzsw3JToSuLZD5Q3zKhvrxzQQo8eZefegs935vvsfGjLS9x",
  "key46": "56PferNX5aFKsRKFgz37EXggz2SpMa1wNgvk5WA6TmjGNovbqkrc4rrucYep7sdAjCJrTyUhxjoiNpeJ2THtcGuZ"
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
