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
    "5Afqq2auQ7LumU25i8x2QJL2YvnF6SuULQjsqfZnLztmCY5qP3DhTJQNz2UocKnzSfYgmbfmDrR4brDVmBWqGqjt"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4FMyEKgXXRumACFX7SWt3d52HEbk5wzWMy2NAVpyu88RbvKWZ9dBKQ6gt5JfLdpX4LyrwEag1crkWGABuqj1YF3e",
  "key1": "4RHNtFZa4fZgnR6wUoYgRMZaohCjoYNjZK1WFdgBFVx9L5wNabVQfbnjox3ur3befUmb1s1MpNtufe3XB6XMLh6h",
  "key2": "4FzS1atYUS5HXkAWTBwuEC7hKjoCujRCeBHb5cS9AxYn35Q4sutgcR5HPVhzBQBpStsXAPD2Qcj9Qa2QPNETdTnT",
  "key3": "2qvJPybr7mXudGb6ipadb9ocHUGxWu5zQZJBS2UzduY1xdYGCiptZ6W69zRx9GbYTNnQwAuVFsqF4iBHAUMF7kUu",
  "key4": "WsibfaWNaxqmvkXy8rvEgXkJjiUDKqEauzzrPkf5RDwLfPGPryL96qEx9hjPymeRUBBLxrgT2148wU7uXTofR8w",
  "key5": "3wuciW3NKVj3FwaMeheqNcwaxU4mtHgo1GD17nc45umqE6McRNNzFcA5VZWEjkD6k36k9iTyANYvARQ4BmEwtQu2",
  "key6": "Wq7EuX3qbgF5HkRo4xNz32SEUcxKs9dyVEwyJxGvxZAbFgZMQFVZXr7acBAzR8zYaSB7vStvTipwSbyJBWnWLRA",
  "key7": "dP1sk1Pk8soMgQWy3xVL8thBwPpesmHswCPpfgePrVLeEeTKXR3mA3ejdezQZpW2Fukg8FwJoecM588RR5eH358",
  "key8": "34iL8pWw99cRL7rbnQXQLvHfmkBv2cQR4f3AMzeABARfhbMSEB2MvR8MkkL91HP9SG9PzCWBAZZGV9VfgV1pC2bc",
  "key9": "31HPghPyn5gnvuA1B745sqiBNQ5eUahLrpuxaPYuGVX2KzqGX13oknu8CFZ45ap6dVK8Vz4jaERhZumK1tj8oPfn",
  "key10": "4HtECHk6hupZKDJFjdJxiiDaf5rf8oytUTYmb9atgrQn3q51GxpcN4nUTdkR98M3TXjEA16HAsUxMEXC1nFSroY5",
  "key11": "3s9V1XnkxUSeFiseQcgpKMroGaC6MDwAhthJMH8b1kmtban8989SJ1kHmfxygS8pmG3nJT4csWbvozQ7jxSYmtya",
  "key12": "4BvZXsERLKRCveNg9fSUsGbL2Jcuj3Y55YHcZPXMS68BMVbwJBzAHkeB2uNKLS5E7ucQR8M1efydQYwy9gD6NPYy",
  "key13": "2WTf6KbpKcPSyTB4C6u7zTGQuebwAYFYkqdmCAoZEtS7B5isX1kmbTQAmV1xBcRd4yALhgE8bsMD4QodpY7kSECX",
  "key14": "2LQvJZDzAA9JNHq2FBF81kvZWDBF1xXGuVkuyybZtsx6NYPALHVo1chwDBdd2jKmdKBtiBvQQcH7aoTuvuixF3KK",
  "key15": "93JeLUuh4a5VQkd5BuJEtNwv4aApeuDg7WJiumC7Z3Tso2LxeBibXgMRwKd4uwXsuVtnr9q9Gv9gYLTU9n6s8DV",
  "key16": "44oKJv1gqAqr4Dw5DjP6ZfzQTR8ktHv8kky8LqxbiD8wcygr1AqTDPDscFwcRkUxkfsa3CbiETWL4etbdm6zs3ok",
  "key17": "5ZBJAp3VMrLsMM1Trd3Mai3TpiiycWgzTEcuQ5Ah2titpA6X8EunJBHKzLxsLCPvFUu54wUUZvZXNeoWuLwiAy2p",
  "key18": "3dMfVqadUzDANkzSE8WQ82mFt1HHSiUzaHTUAnDYfYZ7VLfKwD2145pXJwdjhfWmu1siKTb2WADyg6sYggrCrwy6",
  "key19": "4tDt1fqVNnCWyWnaKqm79irQJ9DvB7NgJVvQZt63GyKvjTPsi8No1CAQB696RvH7PtaTSsvG3JR1ZhTCXWzd6jdu",
  "key20": "3EjdSrKEDiHzvywwRXWrWiZWpw64ssBPdfFmmSbEFfe3FyR82jgA6A7QpLuJgg2uA3kGd6xgpuRzWJAj1FNGK4up",
  "key21": "2Q24umyLrrhD6Law2TkX3bcJyFfK56efhy61Fr5T9WNyX5FYqUZoMjUqe9b7Puqxmcag1aaa8sSvVGMD9VeGtPAn",
  "key22": "ruhSo3bzmaNcb7E4GnKXCYSDHtKbmL9mRUEL8iX7eVtCYMKvGipigMXvtgk4gnRg6A72QaL1peVUM7Eo2FV1MqP",
  "key23": "Jj8WAuAaWRyqEo9nokdfckMqE6m6fgJdmRddUEEy5ST4PnEZzDnN81U1oxFMiMEgjW9myHtWiKfhpu3vbEDN6M8",
  "key24": "5BNNDTpjDsVjovbuKQ1SiJBFvxPwGeAZpdNkvQVggCAMXn1MC94rXE2DDvBPqm7dCRbLpWDGDodihV8MCELh4FZD",
  "key25": "59oxRK2gbwThdoBG1ZVgFL3GTLTXtsCYkZZU3m6p22iQhhbB3bnq2gFiAJhKcQb4Vq7NbGEd6G5oVJGnf5wC82Je",
  "key26": "5e9C1gLpKzRK2iia2SbpR9WnLAAp5JigWRhBzfvdg1trj3MheDPaLtnxweqmSjYK22QzrGCj6fvdbRrP4wbViWFV",
  "key27": "TpMHF1b16QbsRAdRJubn8G3VKvWtBC4WqyMncUYxVvREPSMhCyNcUchmGu3vWpvfcSWPr1RovBsGueF7eDguaRR",
  "key28": "Vhp77Y31n4hwJjcdbZ78o9sM5wCnHuEBLfNXikRCPx74EsRRndERMVtEH4QDsihGdYAUscGBPJb49gdEHokyQbE",
  "key29": "TyWU3u4cQH1xCXHTc9waP45UjKyARdoMWUTAXrgYvj6aX3XJBD6GSVhKX71NbwbM2kcJpjFEVbENHrPoz8Akv2g",
  "key30": "Qod9UQdvLVKuDo8ambVNKoczbzSsMgP3J544C1evhkM28o4LV6uVgGNff7gQsw2aiv2KTz5uyvMN5U7radEezk3",
  "key31": "47HzhoyLj7Soesp513ecSyB3weRmCDbpBThKhJcUJEaytbnd9poT1Gz3siJ71Axq2szux2qrHZk39R5UdQAuTkkd",
  "key32": "46taJsCUTbNEkx9PFA2hfrbR6cN7TSgYNBxzhoHCTDcfhAaQpT2Hy6KgHYEshdD7t4ZdvpbbfFHbQcnB6s6hgkij",
  "key33": "3XLRoTqPcAbw7gwPXzFXA9hqMYvkgWLYeWY5eR5U8BqLpUQ72x3WqVtYCA5aJWRk6ZtvUHS1LBhyzkZ1yAYhwm6g",
  "key34": "5bhfSW4mJRNBQP5DgGHAvViyuqcwbefY9bS8bhYXH3K6V3DDWEyMfXVzLka7nXU81EHaTmQN1Bv2UESMWgHDbbp6",
  "key35": "7svPAdGSCps8oofTbdjNNX5CdFxrCAg1r1q3tTwVtvQN1CxUsVSGE84EjXMRcjKpzmwvHn2CT7gztMo9SSZQaUb",
  "key36": "5H8HMWYEy5zbafoemy4pjb6jRMaFtY6gMkp9KgM6yv413o85LtxF1UPbBAyA3rwKRjiNTNnYHcxUvVY6ut7h3a9k",
  "key37": "37UTryuagGFrDvVsBUMt1tCcPrWJwh7ujePo9eqSRaBM7U8ZfHaMBSERkKAoN98mEt8dnQ26xwovXcj2GiiNEj5t",
  "key38": "3Zd4EEE7hP76EMDqJbqenEwLE7pQ8EzjR3Ld8BM67EdULCpn8S3UdPKybKbLG4quZDVr5vsUMuRhEhDqh5EamGHt",
  "key39": "64evCu8vbWM1VsMsweTUGs9EqBgPkq7TAKKDbXkuLAtVKHjpD6hBtM2wqFYjEjDirXCMuj5e6TbQ99APkbbymKww",
  "key40": "2jNzsguPzC1zsu4QaBU2DfqysQtXp6VE4LS26etJQhM87WniQdCkT6X7nYHFHLSAVWjK2iQrjJZt4u5LtDazJWUS",
  "key41": "2gCiMJaTf4nS8ztmnryEG2pmpzGBdjMaLZoHAw2ahSNVnwXSe2UMKvA7TesuLKMfPrHxsdd3TwJZLRWiRLjJWMWt",
  "key42": "5cppanfFTZtUeUbBPRc6DwsDQeNfHSc23Fvt45UjWAmgXRw11UMCqCwYip3KHxraSbkLHLWmBE7VTfxGqBgAj5d",
  "key43": "29cuj3arLaj2U7vmKHvLpyEGXAB9P3SU4QUtN9MeyuPcNEf39ShchFdrWzAuKMFjCQJjnS36Q1JpgKTe1L2mMTR1",
  "key44": "65agtNs5ztmaWnfCBSNJVSWaNdkRjddQzHETsHWE8mDPumECCo5EVusfoqo7nCHB55GzUv5rbmZjQyWUT167ygse",
  "key45": "53wVqGd4KUEFcsuxTBwTFVQABQU28SexFdRyy6228vuHYvFGqXFjKhpTwfuJHPQXsvcN5Y4haZkERtBJs6F6GoE4",
  "key46": "3D12UK4TDxvUPRnzvXYRobwcwejJBocVX9ZvHRTexmqpX7uLoNpxhkrjHztipvJbnhxss3vBKDhBr2FsEcT6LiRK",
  "key47": "41ua2hBDgBK1opGT36ybvi1Bq1qVn7dNxVNke5mwhDgcpUsadbLR5Ej7N7PcQHh7Ci7XDLaLQ5Am1FcqMkk59dJf",
  "key48": "5ZTimGUnrSYtVLGfDt62tmFSHYdhFd7ZaukhkgYnNEJqQqkyDBLazZsjv1WAyoYDpyDivTUQcA35ZrJ1VqBvtfay"
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
