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
    "4h4YZM9rcnZX1B7aW7X3XRcHZmpKGqCzxbHQbcgBi2yZxg7w52KqoGjVyBKj6Z7njTRNiHXnZz7o6URz7kegYn9A"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "Zb6E1HMcf2djexjXjMJf54BjKdDB8HkhjvcQZe5G4Q8AfvuYfvA4vGGjqJCFr9Fiawzhk7Zq9Tz8ReaHvavqfrv",
  "key1": "87BGe7pnXLthmLveeFC9biJeLiAbfhC3EcpHCJiwJ6EPLi14i5qfdyAq2ywLkwRgDASKofDu1yGVzDazzEqmqHF",
  "key2": "2eD9nt9Sff8Fhk1Ej89EWwajwmrbhzi26SRzLfrESmrnLn9uMjMtRUyDr9DwpPfeqNaUizuSNN5iLnCkXMuVDuYH",
  "key3": "Sw6p7WK8EEPvLgJ5CHPAhto9x64xdKgvM36njtBDa43zVotGyn7p7PdhLBw9EcAzS5Na6YmvgV2DE1hQia86RE9",
  "key4": "2Mf6w9kdmL3Uo11EkbFGLaooJL7NYBQfyH9wZg11tQ6DFC7gSEqauexv2vLRsDxiMoaazT99d8ixmXJEyi44Fsp5",
  "key5": "2gnBci9GcTaXP13jqRwisbmPDc94hDzpZi19E6MfA4WMFdU8jvjir8dvqSHkQ5BmMMkvWetze59oFd8k8JPkMSbK",
  "key6": "2cCqK1xM8UE3J79Pp29Z1dfhW5wi2w5GWGTsSGATJVeqY7zN9Q9oCv4SThu6L1ZNLJBdZguciQ8r3dC4uiWKRGbu",
  "key7": "2WK2wseob2bPk71xsoF6BMzXC95NXfBQqQj1ekAzXfwDMHfHAoSSrjZC9uiVDPbrEBhYkDswedD1xx1H73jReLWd",
  "key8": "5HZ7uNfsM5rMqsyaJLE1Xyu2it8fJma5sJDtaP6jv1C7ExDEDV41xkUNFvth39use1JJjq8TYxrE8nauk9gtQcfN",
  "key9": "v3t1gNYayxggnmSGFMQCUfkedqhpqWMehWxcpkGLyiukiKdW9Zyckr5XHGRZBNC4HJ7jj7LzNaz7QP43zeV9jrj",
  "key10": "5JRtyB5DXr3eZoqCLJZdRFmTz17VTNBhkiU6ZHSYCdxXY76nHvDu1LuvNq5tn5c4WHxYk9ZP48u1MW6Q1EQQ34KC",
  "key11": "ZkckRcTyTZWUgp4WzboDZ5193tjHbQPFtmPUrw39cxwPgTwqVNL4vkYGffZNTiy4s2N4Hi9Mad64o5zM3UPrE43",
  "key12": "zVz5U45DzzsxFZxq1d6BBAyu9QKaKyxycmSWoFoPsfKyKLA2GTKLC2bHnVzZCcKyGRMrK1Qgd88FajphNTRChW1",
  "key13": "s7VmghBQC9W4UsZXjfpmp8R1MBUCyeNnFTXzMFACLUK1NfsZfMBgHrU9T3cRmf7xJDjqpzRdhiVEgh84rRHpMCo",
  "key14": "4e7GEDB3RwZZRhUYAapgjuczFPPF5AfoWivoEiaqxcnwrYbwWDgXf7f4c2v3mgxUe1GSimkjyLinDAqsscbub5T1",
  "key15": "4sNiPNystyNgEa81jXwtua21WNdxZbvSL9gbgSZznFh2GRnXExFF8VMPPKYYD1naCKZNLpmRoFXCXjLijhJ8B5mz",
  "key16": "47aLmBAJhMzcqiYRszxuWYKbgfagyMMhL2rYMWkqAd6kBCommzcGEHJLx6Roxa7JrJ2DS9CZLWLToyjqDsg6LnXs",
  "key17": "4vPLLcN6HntbapmXjMqvdWDg9dweds3Cd58tFXkhPDkzLZeDxCsqWfJLoHUkq9qgdzJ7z3RBAnHkQSUHTBMS1tK3",
  "key18": "3jnts6BK7kf7bsXjzswV5XoNWULRhzAzm4htVtYyLjXivimnT1W5khHusa7GhGHT7xV5WRSs3PDnKtjeheVbeE2E",
  "key19": "67YKLjESKM8qsN852ePpbii8vaAJubieZeUKHs8Pej2qpW5bmWz5poEMYcA4JZXEgevafLdkTzqNE5PHDpTmTGCz",
  "key20": "2TZVDgxtMRHK53DYkZVAYw7fTBCTENf1Q8GAAb2aALmKwfTppWGBHPGVujwzvRCjTrE7G85JBECs2pzfP86Qdwah",
  "key21": "zf6J7JS5Z6crVTs2FfSwtkStZ1wugAmE81fdM32uRZinvcrovBL5mFZ3i1nT5sNETydbPyiWCPdGNPJFDRPFaHE",
  "key22": "2QE3VGDVgQ5SYZUA36iZohAEzWgLkDBhCXicYLwqws8HrVb5LCUzvXUThuNg4GsgcNtUfncrt74UXScv7DhMJ4J7",
  "key23": "FwWoq5fg5o8Amsdhpr9gd1yQUtE58gX1KEvenQJPvGv9ajGADqgrMpyakTPwct33qBnw2d7BhSYroCGQP4vT5os",
  "key24": "3rr8CMVx6rqoA9jAHcAbF3a6eQyvybCDNKLMGkVqzHcusGc5u1YHv9dfRaq6srVJsNcXwmgfr2tK8w7LsLv9wkE7",
  "key25": "2Xw9v7y7hX3kQ5i48XcxEh5sZ3JDawvf5SKy2hKi24NhdQDGPnMcnJvNKysri3eezRm5uAJ7PERLF5vBvacj3sBD",
  "key26": "3KuQbhLHaUoaP8sH7XQbi1LqDUUKi3qCnZ8DTeS1abrmBk9nonU91TCqsnFnSKajXJXEHcjDqTet2kHaPvPBrMeT",
  "key27": "2UPMKh4cW8CRMAjswvY2YX4k7Tp4RdCEzgmw7FVyUHonHEa78ck3QRMV6w8b1aYtVzFZxpf3EvtiumgkGnkgTivc",
  "key28": "5V4cH6suS3nPB4VqkWeoQcFnRwpgGoDwqcbicCtiyzEoVTqH7TWvpvMjdPWwTZe5cGkYHPcH3Ah7hvKhGjsHaSS9",
  "key29": "27rBWcvAZ5Wxa68Da7QspAtfdBvDM7rEBjassrrHMgqxzHhsfYyLP7zMuccHS83S4atqwswoQb8QeTVCN3vh8uXQ",
  "key30": "5MxFb2KGGq1ciKgySpbUBgDAfJKoPyiw9hGFicSPjEkoUhwpZtrzKUKNXeYnZBmsNbS3rB4mPqfJA6qe1D9fKYu9",
  "key31": "3sMnQ13Q2sQw9dZN19ob2agzhZKKGepBC6UwnZyw3iUiihhZLadsXH9ZAMcHLnLQrfisw7JiVZj84iX8Y4zqkY9n",
  "key32": "5aw6mPte7XVDdDrg57sG1kegaNF9X6UAn1B5D2YTMoHTuvGR9JYaAbwrAx2VLDFt3WuR73ea8VSHe6CMiqchof3d",
  "key33": "2z2J5bBP1go8hMMCnfQrJfPkYRUEeebWZLCAfbAxgeskvtUzALnuDvRp3DAHCaQ3UEzaxZGgvvJRgHtsTBmNYeFd",
  "key34": "2SQydLAiKomM8QwayQLZKeoNjJYLUqVQBDAm8Ln9DZkcmdVMUyjVhKjM7MdbN8NKCzYinJaMxToCQEzxUJpXxdht",
  "key35": "2gziebZsGWDRUr5FFNVKrx86A3Xm9drUZsu35nF4rSDN5TLDWRUjBTuiVUjgL48eR6y28RUkZSDoJLtJX7v2p7yR",
  "key36": "63Yphe66iaJb1BHm6MDXMwivgu3rajeTXW9TJUnjbPJ23sWDURZMA18LaqqaMtGkHk4KJjAacuuUtUzucVxMuSFa",
  "key37": "3QqLPMpvwiAjDUmjUuzrp8BPKUTxcDZBegTXjTJkz8Bf1HLmxJ6yuY6N2JffPqr6727GQBtUNXyiWz6n1PqMg8JB",
  "key38": "2BoqUJGKFSWd9qah7TQ6mBdb18y2won32ahgB17SohXg7ZsR4SA7Mc6a8GEVFVSN5qAnUDkjRP6TJuL4nHUugWzi",
  "key39": "5LvJQ7jQ9eNkYs7bFqVmzxQB8DWthgEzqd5xvCmqiyLWPBHo4gG164scVW8sKDiRuC61N6BCbGRXPszBaCEXKvi2",
  "key40": "48FseujicG6EvuhZk9oKc3tRFDitm76sMJaj6TirnjhbrJuwwmmxTnXyBhQDx874HUkMhFnTBRTn677VuD2N2ahK"
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
