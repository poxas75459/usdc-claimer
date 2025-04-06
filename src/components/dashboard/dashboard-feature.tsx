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
    "2KHigu8fPtf3g3U9Kgd5GxWV4HTc29mv8KCqFRfUEfdiRYnC9VyNUvxmfMDyU6jGbKNK2F7XxMFnBZDUEVG55MnH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "UiBtYi5M7tJEmmHafCWQLGfkv386QG3LEZ5aEv5eERNzQbvetrdWs3nLvgrwRkJeV4mZhXfswwZpUjg9DJbbJQu",
  "key1": "5RkTmTudwnznHp4Y2EG7iJbX9mzHAXSDaF6JGcLALXUphYykDM29fVQMGp4cFzwi9kYZj6YUQyqkv2NaLKJBrVRj",
  "key2": "2978jMnrQ2qRitQwUymQqyCnk3yKfJqkTbZczojsq2wdWDcrhEQpgexAZS3hH8VoYhJU1DF5zZkJY1UFpj5HmVgc",
  "key3": "2Lv9oQSSbpoZGvP3CVoim2d5kiAz1L6VLVUNAunFYxEZJzb5RRcxFPbj6LNhWBnZRb5bNC4JNPJxNhq4gnLeXp4G",
  "key4": "5284Je3jUq2Ddy9UsjcXmsjmuhG2ueQRNLBTUABZw5xcLhZ1g1qHX3d78hjgQPsxXyyg79DEuS8rLwLbqA39u1pu",
  "key5": "4t5NNE2ZWj3eukwj9714XiQeuXe49hXzK9DV3EkWKmT8dhEUTpJSScmRgYL8DwhwGFv9N3voq2hDSTBR8hKTS3Tv",
  "key6": "3xns39TF89s2PqAQpeAsm93ieTbAe8ZsFAodnLRubZaA78kXtSqBEYdXwqDt3BCU9dC99iX1v6mDKiUxdrEWJQzQ",
  "key7": "kTDgN41CTib8vqXjyFjSLTfr6dj6rkXeoB5A2cwJpsUGT1d1E38eq4oZ72myc7j6z5gxFchXbp4SGyj55EUjxNj",
  "key8": "2gGtX5kk8rG5VV78Dxh73wzP6UPemNy9anfpVGni2Y6bRiA5rEdRHXbVxEkHSZQFdmhDum8UaKoE5q485Qk74AKL",
  "key9": "2MQ5swraYppgYwXEaLKCAgf4pwqekRqfXXRuvm9oBkpWqmQp7vMV96KRUQb6jKm1XQYSXQXejfvnFghMoJ59DQLw",
  "key10": "27eYtEpTJzCiAaMy6BXdsF2qriuEJsor6DXd6xhfqvAN6MsUNLgZCmXNRUf6mAH3SRKvNBt4hkTLEWhHQBDJYdRN",
  "key11": "224tRuGyrRWiihL5xGkqPh4bHB9wVwRj2kYLLaNkRvQ8eSXUsZAahfykS9f5GZQo5ek7Wr7FfRkXsujNSpE4McWX",
  "key12": "39CpyCTHL5RWRYRcEPxoKPPwPCwduVDRApboncTWSD5ZLPmgLjqLSh9Jc2eHVgRcDkDTupiQvJH7aeEWzREhmq1c",
  "key13": "2z6a9X28gqcL71FwLfZ27p1cRHAemJXGtxJrbfbMpbDAcRSDGweX1fX5EuLHh9VJkF6HFEHLt5NsmYYvwnwHMPzQ",
  "key14": "294c2Tw5WS7cz87ngKyVs93pDi4LtPFs1wM1WkvhVbVsAzBMvyD5fwqgCR6x7gyny7mvKo3kGySRLYEMtLdF9Udk",
  "key15": "Lpt83jahPgiRqfd4Ee63pXhm8A2k6UtLeC69VsDjqHuYkk2hsaMiyWuSPiATGkoUrgexVqm5zkZJZQpcjqEYqkh",
  "key16": "5ZK2Lw7JtdYn9cGWyLC1dkoBRVb6p6caeRDGUqMExXMaUhAXFAMZGDUmwi3s7DqXmNLqv5af5jXytHJfmCZ1Phyo",
  "key17": "4sYNipY3P2gpkwX1MJg2ZLq64A7azYCfhsK6WRnbqjBFn3SKPsCXUThmsDbHLedDAgNdZbnxtxTseoWqobtPvfk8",
  "key18": "2yBTxfhd8HQrnFkfo2iu3hUq1kzbnvqHvtGQi38SU8aev6ViApLnhHmTnHVPQtnyVdVGvo2Xo7GBaKkWL9gNzDZ7",
  "key19": "5dtSbqMkMSYqXrTQba7isY4nANuWxA6EUJMC5CvFRS3mxPSdoibojrMoZimdDhoYFyyNZvPYG2Twk5Gu6x5wVcPc",
  "key20": "4BUSuGK9obLmJv5cvGmNPuBAazZgHa1Ti23YDBaAD6WVZRN4JuYRVAxenKHAHnD2fdUDT1QgvLEbFDSWyvovMwWd",
  "key21": "2esSC5pjW6XW9eNiv98j3YKsMjBYNVh9Z6Zis27Y1H15fp7QjqJiqHsE6A1CZN5f7ahRVDB9BoadAoSWscofW8ix",
  "key22": "UiLuPtERcf9GTM7bWXK99oZejPvpc4qMCNQUB7ZYbAsqA1G48Q1Qiyn7okB2Pa3a1eF3NiPSVre6cdxw7vbRqoy",
  "key23": "DZjz1EDRNH4Sx1yfTrF9oNVoz32WtU5VsecJxkuyU8DbVS5zQHuheCeawEqiC3Q5c2Y6mXXePt6JXefJjiq76Et",
  "key24": "7HLZRgYQhiHou7zkEQVAZ2tw9DgUxeJu3aZpxWv2DLaJknE1rJLT3dLwKtbYgMgVYJ2HDCghoQVukBaQmHHZspx",
  "key25": "UE9UMaN5eTHrfz8sct7B9Hha7CNYojzAGxYMF7UAccqXqnBzDQNnZ1DpmzuEz4hDYwKSALKJ64dLLBRefrokZ5F",
  "key26": "4JLNdWny2XycAUtpHYxozEkY7n2hUiQUhb77PQoeX8onMwuMexKQCLiNFbGfLJwUgaJgR2E6nufGdnjiYCF3f5tJ",
  "key27": "5nyQmt9WHMsd2Q8PRukbPd5x1LzoJr3VBdHcJqoV6av95C79EMtyFGdzscNUfFGTBniKM4F7VFhJpfSXYaWoes9j",
  "key28": "2Wqr12jqf4qFjgnhWLymeQu6fCcfRWFka3k6LY2aGMybTH4FL6E9jkbwPS7draCQS5VEtNRb2BW8RXwdarQ8FUSK",
  "key29": "3A5jqoAy2b2TXzxgfMVWJ1MdqKnZmoiCUYq2ELddaM9bFQAUJ92uTDq3wxEveQWhbYfESPcsXhEKEPEXhqWQkp93",
  "key30": "31KM2X1s8ELVnUngqupuA8G4ihbtPNSFykKeXAAzTZQaYhSCTVNmRH8FkLuRpMnaQvqtjjnLJ1J21ZAiJAcdPoCJ",
  "key31": "Sxhcfctc5Fg8a8hFTrXTdrHPtC2dUGbsBCraAv7QEfrsUCPVEioUdWLqHvQxyBPsGnfp2CQfc5yobgG8oSFDQ9U",
  "key32": "3P5AGVxNx9M2xtnrCGb6xwyEsawkJ1FHzsTKbbbjbBH24cT34ueqjSZysujMCCmjDorZJMbwetnyfC4BCCrVd6MK",
  "key33": "3Nzj7YwUHGVNNNhVuJqtjy9jYy4BgUcQLqiiiTpYbsaECveyaJJjiTTW842pmJe4FXpGCoYEXKdLYdJMBFTJMqe",
  "key34": "55ajf7nqzTvq2f7ZAwMmntPe5S9GLwhhRRWZRTv4xttV82RxhYSCkJQjZqaFLYXw9sAwNN8S6Snt23MK9947CRfG",
  "key35": "3A7EKTXPHFc4tsULMvAjtsyEPzsRTzZzAVr6fghXCeexiw1JgYfsppdh52XWvMMo1eUkgpTDjyDM85pY9VmByULW",
  "key36": "kHmL9RnQNsWjHyLKisWNeT7HVGFqNr87s4qxA971UtdweYAgk4CeQbDmaCLn9XkFH5jHJne1EvSCnXg2gA5azqJ",
  "key37": "EYNhp4Z6kcw7MQn12sWv3J33Ua8nxBrD8wh4WCbeUH3PL7qjiueU9cP7wbgaLnEpmNbMignJP7znL9J8TiWhKbt",
  "key38": "2hUe5L6XEUsB2vDwVcrtfe3L95FVY7BfoRL6QjHHgHCGrcNeHASNsKim3gmqWofLpJUPcYE44ttd4cautbLY3NS8",
  "key39": "4PzFWeMcCapsqwmh8fbdvszxnJT72UKDb2Z297VdrLPUsY1DAFeUvftFLJmk513SKH2PGURbETm2akL1Y9y8MNSi",
  "key40": "4RAZ39ECz1ZL1kvejSMccxSLAffjAxLcmHuJB7GmQ5KSzjV8NejwJihTbdG2KT12tg9rL7za337S6vUHxNyVotjG",
  "key41": "5cWMUm983V1JbJupsB1BhW5HqfNbyAJzCYEYcspNs3R53tSDePzrapPBdNRh8t1yNaJYeHyeq6Uvy1wCSRGMcW5T",
  "key42": "5AZ5fKhSzp46aHKt1dxrRaqHzzykSYr5izNkGwXgZVq79JKdfW9W7yw6hdDgLMQ4jrLjsjdFQ77Z9MmurbsnDrHf",
  "key43": "7Gx9xAAyUfmGRHTLijQhvq8rWdDDS3Cxq1q7uTL4TMcVGakBrox7uqJXyT4hyHckd8zNLqgvRF4z1orDoue6xc5",
  "key44": "4zyxzHgpkqG73Fky2wf7f9HR3qeWSnvdJX8kvgWZwrPVytL6SzMHvTtL3NpWWUuJFrcKYckdfmULMFYTR2gDfWS5"
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
