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
    "4U4rH3UZpfn8wCMEbPW1iR6W54tN1Q4FYyf9bJyx35K6ukk8WfwweFcBfAZRgZrbjhsgySnjcJCDURaGYZ6ajkw7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "FMuFozY8MeTuhQmPQrSq8EFKCDUZrofR3oRN4a9fBWPJohzdmPQZ71ieyBNdJTej1zksJNwykV47zkTExHy9tru",
  "key1": "5s7yzUL2wvbbRDifyyQvgQKeXBJq6TLoN3cP2LHuxaQGLXt9suJ6MqiL78BdQebRA6Tdr2XWuqfRSCT6pTuZu6oX",
  "key2": "4t5sTkXRm4oby5pz45XFKPP1rkcTgibrspQU1gYrswBerNJRCjd4AZ3vrJzRGhxDY8BURJdL1yDci9oNWkm9yDEg",
  "key3": "2DccBYAxPqg53htVrj85m6SX7CrwJ8QkLtt72Hd561YMuR4GiSiNgs46fFKoXqv46SPs5GDeQ1ohpemHGqkQbaM3",
  "key4": "3CV26K3yFKDxSiasb3TPhPvq1qQ4fF3m2WmSMaGEYDo2r2DwiggBPszXBijNbC6Qa6DoNjckbLFkyH69NNcLkqqm",
  "key5": "3Y77FVnJtPChnfNSTW6dcCWxTiDUBTdsd7WMCzKrDP3bUo2qzsGGvE4d1ti3cJ1yD8diYuKQxv2fqcFYtrpK1m4Y",
  "key6": "5CxbB8DbjnMt677W15YWuP4VSmEEdY649PSekYW8BtPGx1YWxq4CeDBp9jpQroSd48k6AaDFzSAFpj99QuDQEhSv",
  "key7": "4JfcYPTrvaSstDGkaBoUpDtzSBaRWCQY1D9vM5Kxq9PhoySB4iNzKvWJes5Rj7rStqR59w4eTr8UE3Bqjr57wZVJ",
  "key8": "4hTWeDu6LCk6zLDZttX84pFkxNZqS4v8tVD2hjoBcSjka1deUEN4qfpy1z4ubijZXF8f26hjW3v6p43v7UZQDRDm",
  "key9": "2s3FYhcWTp1V678JJdbUDVS6YLa6Ko6ECBnVMsAxhQzrdV232hjB38FZ1dD6WY8ekxzwPuVPyQ6TtkhQxETdjMit",
  "key10": "49AjdMwAHtjg7hKf1rVgPMPM1Lx7TbNaQCk6ebbcErVNWW4SebzC5nyyhkfx6CeMsCnhmBbzU2iHRonwnok2eLGz",
  "key11": "wQD7atnBUYaFptxE647LrBQ1TXyMnrqbnP8jWDuwD8uxQjkEVd3yDJw37CKVeqm1sGC6uKCgqB87NN3uhRmhyoJ",
  "key12": "4xFxagDL3WmoXg1PWvNhCRHAQ7UoHRmNd2Th1iFKn5KYdVcUxLdotxDVM3LZAPETvRGfDLpSseGnAGAnt14Vu7Bg",
  "key13": "vHXSQnH92HH4cQwoQ7hnA6xQk4kXfJJHT8WnH8kQZjGQXQH1S79jQoctd16Msw6WMXBy7DjGrgrzuwpo6ed5RhP",
  "key14": "3sZ5zhahhskDDeu6GkDWhes3rXLJaCj7ExzXqm7kDHGTHbWYHAg6NW2bG85mHM47z4xAMGfaV7qQdPZtLyx9XJC5",
  "key15": "4jACA2w3ELNjey5tAR9gtR3Vu88Ps6H2wa8ZdxJdWERLox6oMNd6GUjHjsQQLNJRpCMWJU9ToHFnRLgkDsPa8cCJ",
  "key16": "4FunWnTG9GZkeAiuDkNpL5umCU9Pe1xiL6TkUfEg8JU5zgGsspE7DFg8nXK5tDe9rGVpVgjNcCN5wXLkv4hqLT21",
  "key17": "5CKiRhyAXhvZPJTALuvE8gV79XNy8edLi71XZjFa1K7PFamPFPNgbgh6bojgFcR9uGQzDLZGX1MMSbCrkXWUqari",
  "key18": "64hM6g3Y3nkJSwopccpkTP7eZd53amf2yLHMuxU3UN4hLvs5EZq5CeDpcMG4UwYEBqUKFUGeupVjfSUYrp7Msjo9",
  "key19": "4mwHphLkTZPry5Ptv2UyE6mYafBfJ8BfaVWYSuK2zDJb1YD6XxM8u1RBtpkyVVJBL49Q1pe4faHt3ZvVgThBp2Tw",
  "key20": "BeWaYmUYhwSAMpx3UFzWmAMCGTAaAVsEHG4MiFdPaTh7Tvk2U1zHUGc1FXbTfaHUC9rBsP8eVbGbySJZMcGv7Hm",
  "key21": "3yof24nowQ9grRT4Aj2AJN88X3ia9oTgWkTR4Ho7RpnssgATD6JQRz4gD85rizgNAAxe8kH7Pp9EyZVnH1DPw3X7",
  "key22": "2AsbBatiVJvLFQQmyAQ3TfvUMwsfjXv7JBuoLRmCwWLht5wrYPT2hZZ7rjTGdJXBshpCeG6J15h1AFGraTnhoRUy",
  "key23": "3nntAx3re6QSVMcVBK4cEM2SUTasdzy3QanBKhLTpxg9gXX9Mu9BA4JmJhVGnNzL6RuPqiu9EouGEagAaF7ezGLo",
  "key24": "eWX9T9Mcfj4RbsT3EXE8JVbjUtjBjP5xozgXXnw5GPqpCp2XYd1vko81dPtbfZbFCi18euuzbpmQMTCLx9rmqao",
  "key25": "49R7MqyfDCJamNNuWKNTpFVwjzpkQH1girgxhRww9FoeMZWT9oHiqqrKbY2gkcqE2yb5vAiixnyzDBZGCJngS6N5",
  "key26": "rK9QCMrJELpfxm23cdkPjyzA4JRTxXvd4uxcsvmzULwPsmjtDCcQBPHuzdhv13zoxeidKwvhi1avf5K1AQveV54",
  "key27": "3HcEu9rUKEHZjo5jUQDH9oCq1V9kJ6c7i1EYvi6LuUV3cWjNeBNj1eh6frs8RCQxSwJ7A1a9F1gLXCNVxjZ62FWP",
  "key28": "da4GeRGAjJJEKLLMxjt9DS3McqmBqi7iRYjoK5yb8Wy3SJsD4CaafekxTLTakJYu197rEKmuWrs8jWZB6VF1QW1",
  "key29": "5tTWXMgWGLj5tJ2x6TiVcT57i8Vzox4ZH7eiT1CLxRS2yza6xs79jwKaRPwqFQYQ35VUUK1nCQxgzzB8P8G5DHDa",
  "key30": "9ZAo5Ttu8fCiLXLK66egP9KnQ9oyy3mSCYTTbvyg5DQShgc9NLRdtB4dCy4XScQRxermE6DjWQARrjmYALjDG8b",
  "key31": "2hraJ7peET6EeuDiaBNSjZkR1u6z6dPUnVRTyM2qhdjYBLKTuy4b4DRw5axYMGyBKe8uS59ZAEaAW4Gpy3FLvP3w",
  "key32": "64Go45h8sWMFKanU6SSX6cpUhBpiUUWKYRHoUCyTnNBdDLdmNpV92sofh6mXNBtcPEvQ9nxFct2TeR823cisbQ7S",
  "key33": "rPpoKtFSnozWqRdPnDnvvyASS2vNWX3o56c4sCDPq7MVq4gQf8Z6WaJB5wSZ93RcX8U32LnJuf8X1f2ioJpUVJY",
  "key34": "4mgoTZyigT2Yjzk2pdHfGrpnpzqtnNGtPFKTE5XCsghPjkVe6zTVjJYotu9pkXxHAGkwq6kD4ACJUYKcqYw1J55T",
  "key35": "Qgcr6RZd6vQPdUoneL39pq7L6GjvwdNYjd35WLw1GG4uTPj6StfQmF8jzMPKXr1YWsfPSp4T3MaiZ4ShTiCCCTJ",
  "key36": "2CZ8gvu6KLQPENyGnGcKZFE4pCpXGtLVDGEiZpZWdbJY3yC5Bik9GRiY1jRHtEZ76VSWAw2d7wGTPWNcUbQabXz",
  "key37": "51PvWSTAFuoEHpm5CP3iF3GJEmn64p6EH5rq5t99U2muiJKreoDgPAqGtenw47YFMN3rxToY9Z9YwBCZa68LamF5",
  "key38": "DSd2TVrqtGMVnwjr1cZEXo9xZGHzSDDa8KnHUvULMY774B4PyKPD4fm9M5HMkq6u6Agw2Bra4P39vP1hUNGYzrw",
  "key39": "2e6hcg1RqUdaC56c6SMbdFaNoNxjSM5DkzEk2YVvJd2YNQxCfqz1KA3B9husvJhx6qXH2QjovJCWqiuP1KktTXQi",
  "key40": "5NLwbYmFYo1bamfxLytCUCPExoRsBDKBDxgM7N5oZ5cDBkWcf3aUSn4VdgcecUDhrivNY7vt52VQnuGrwxzsFebi",
  "key41": "Vg71W9ue1b3WTn7qUhr1tvanf2F5SLm9qgb4HNrGKyshhUWvAAzFZaJPfCBvrN4sqNa9W5YrBGYjYHhmXaboM9t",
  "key42": "srJ2zCsEr5Db9LLLYSjSRMqbE7bsvasQKFYa4Kta1ZGkBPdywpLsXmhczShjapV4drfm7ipswK6Pmo4ZqP6jmBs",
  "key43": "3sxfimtBChwVWbQxuPw9pRJvV7nc9CUsWZcgvdVoxcaYYbW3pkNKbZCxh5YpnB9hJJE9Vn93WdX59kuu6MKkVkE7"
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
