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
    "64aRimLsn2KZPHcazb9czBxFbSdUq2u5WH4F7Z5gBMTiDR3awpVNw9KsGMjY1PawdTh82LNZymzCnJhXbZPk42Np"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4RmFmejtUqg757fkpY7trM7fCMaP8C3Fzviuo6hpVjzt9FmTx2kLQsEukLoHe2TDhcLDh4A43erX6vthT7Rz4MiZ",
  "key1": "aQwK7PbzXUy3ERXwojHWpzj3wZgUtC8zoykGWH18uCrm61foCDvMGmkJdxihSMimruEndn9CitTtGAWxkxDNHeY",
  "key2": "4xMXwYkxcsAfwf4Gu5Af2wKfCbZVViYFq2gkprEMCurPVxhnx6T4CGazWvHEcMGmGsxQBcrxuox5qJMSTuSdDeL1",
  "key3": "2imCLreCfDaQUqY78n6KL4G9CU4YHUGxfzJJegjMfYeXVxe5DriNDog4uyRxVRM4VMnZ9SeRfMTgXkvoBc1RcFNX",
  "key4": "5mhzNY35A7GDXqWSXdgTf7n4KPELk1StzLcKjjdbg6vT7NiPuruqjRysFJfTqAHux8FDg2U3QRvVtwNV7iBUxQCV",
  "key5": "3ViiLKVmZUsQuX6JRfMDp4DvnqeeKkyHWMyPor99UaasVDYybR5eF8Y158GBzSKxbCwMcWFynuGUEtEzKe18ycxn",
  "key6": "J3PZBbJNiW9iz5AaqEELpwmcf7wrM9iAVGf5mJi3WSzzj5jTAqTz82XuSDaT7ZxV2gguqiYaEKSxBCSqmtUz54A",
  "key7": "39gjRMF9wGrbAeFt78tL2WQS2JhWgVd2WQMieifmQEW1nuhkDKNY7SWyswJnqaMyx3aSmkrWVvSMscA1cQ9N3ezm",
  "key8": "4uP743EzuGFkdegPhBF4mMGa72htdHYjZSYqu1QeYJ1wF9yzdqbCyNFAv82TRyvMEPfG69jxoCP4Jz2fUxcVTtdJ",
  "key9": "4xGxqkRASKTiMTUK2tXtuQVFqHnLPFct93k9m8UgGxmJ9iwnyBr3MYupMFAb71EG3gP1dTYbxq5k193cUo6Je5qj",
  "key10": "2u8x7uWicQQGi3eTqMRFLwVvwEc3uMs7uHaQtnvDyZ9hRqTPzrSXvdkeGDXNgCq7Qd2RZv9rjvcCGBbZ3aJ2NDk2",
  "key11": "5tBxPN49E3GvKrqRs2yePqK563aX5eLbyMvMWML6UPYSJu1BNiv8qCSNWqsJXCMujmTE7wcN9V23fVvaUixf1afo",
  "key12": "4oB5URLqQ1tDmkfSyxGhBbDqtLVD3C3K6A4Xm2j3KoUh4PYvzgGwcXhiEmabSva8ZvjGyPiJEXjdYfsGKYChwZy6",
  "key13": "4N1Zfp7CWjeQvvp5YsxPe4LRmyj5DGQFdsf6ecMjCYdDrCqiAvHRSpPNa2c4jSApmiRdcpLXJRJUy8RsXyGAQWhs",
  "key14": "3fWg3GdoW5zMVYaQvGNg88FnjdeoVynxcaqhdKjEzBDLPohgqqyye3QPTUanDDdrF1eKsLX3EJjvyTZKizG73jfj",
  "key15": "2SF5njLfTC14nmCDzwqDgFNPetXsgrKR8nCnE3WTaYt7cVnEpMsJ7VxrjKhQhu3SdidNhXzZJAyPYoPuG5kjxUmi",
  "key16": "3uXtLa19nn2Sw5ESZ25hK79d3EcgFanu16TazGU5SRsqHyf987KXJAsv4qQ4HZdjf87ZyZSveKpVMMqH4eDZQytu",
  "key17": "5yjfrEo2htYEnj5AnHrdSSnmnmP27L1HuGA9BPYRmm7xe3mJcJGyrt25PTcNMBzkYJc5F7deNe4CNpPV2BWAmLJn",
  "key18": "2e6hGiKUshTadBjFYoEuG1ywP4R4hUCDW6FDtfvTzLSQy1hwUyrZXbgboEVgwXSVrxzuyLfxuUAgMhV8nrbZerZ6",
  "key19": "65HAGgPzTGi9HLLgW5dWzgXek5UmvDdb9UB9gbpE92M5k17AfNBDkbHpXjhxoqZdh68mU1dj8SrXUbFzycyvUSu9",
  "key20": "21zkmtiX11rPagfGGFqju9p41xq6SBE9vS2o99VPNVGkKTD5JNDYjhPwbQFVq9r4P8whyuwTCnitw9RShRD8yEL7",
  "key21": "2AeMkqUcV7BCDd8xQN77X6dzLNNES5nZ3nbCU1BaXNh6FjcbRCqYrteSbwempA3maVa2CtuYsgQBZkDfDFF2vSYJ",
  "key22": "41FjsbpeV7JWVADcLdjkBDyJyqLSMncgN9ftENXP2z1bqbC1SPVzaUWVF1zrpFaDDXeKpBjdwD948eaQ9RJNCYCE",
  "key23": "6Zs1r6C91K283m7TBDRzMZDzgN9LrcoE4GeYvE1dBhyd73GrpbywL1Wkzkr9PBYN6ktHwVjBeBgdmKCDSqhgRzV",
  "key24": "ZPtqnar37zn5h5TbLYJDoQMq5shquh7q9kqq34vCRMqfKCrm4WXJ14Df6XAeCK7aUSaNS1EZDDcGH2gBTcAMiow",
  "key25": "4eanLCwePJ7exvFm4WRH9kAT1osSEPbnC4nPzDBXoQmgoyemdmjcwiaxETz1RZYCXp5kzcQNQ85P2L5ZzHF15NmH",
  "key26": "3StnF8GB9jCwZe59tunkELjrkm4Bt87w7jouPrYBXdbC6ARKxVGxvqnueTiYGUkCKrm6EeWhACgcACGoX1cTwERv",
  "key27": "4gV8W4vHvhCYdVcBWDv4VY3KuC9NLHZnjxEihjBi7Vxtee7UoCH9RvTGVtP7eNVQwvuYSxTXbNCoekStfd5ygaKe",
  "key28": "5hZFddBY92b4SfXivt3eX2aB7x3G7WrZNs5r4Sv7Zks8ppQgQDELh54qWjxxAxM9QinDBDMtt4au6mfWtzVuwRQJ",
  "key29": "5UeiAFqfsatLkYEGyYn2ADSBJEigniPEN8Zj6MhA4WZQGdGivFwmibugYzCcuk1FnLGD9iUGdk8EkYQ7wS6dizdU",
  "key30": "4iEbtPPe5XZLXRRpEEoWgrjpUZ1LdjNmHnCzoGzkQrQxVUBEj6CNyUHL8UwjiiN8NYRitzEhh5F48P6E36HVmBGk",
  "key31": "59LmSD9bt6Te2hJzA2156Wnx7wHY7ZJCZYpPGeGHLA6uFwGpTqtWiszZF7kWrJvoi4EHs64d1SvvgowuKVRDgfDV",
  "key32": "mE9DuHMC34jaDjpJDMQruQMeLkNUpJftboTCCtN7CdpfdsLN5SkTHja8JT6d7f9pDniiVyEEUZEXZFJEFDVdXGm",
  "key33": "3ou7tfYR5ToqaMMyDufpJbhnM1JiCwQdoG1zYtf5yok3HrEpsZTLmjfVkk6W7fH5hhYsNAf9LE9s3uUxLXeZtc1C",
  "key34": "1dY6vCYHAeELKLWLuMd8muv4WQqZoVXkXoKz8SbfnDqSZAWg1E67Y9yMSySd3mHPeAEHQzbjd8GEDBTShUBh2XQ",
  "key35": "2kNk3ooMBeNZ5cctAYTYgLqwnzWVKQkyvZt7WbSmbmAzBjcJQbKmwVyHELdMCzAQhKJuRukXq3C5ph8VrghZ4pPr",
  "key36": "3eSH1Ca1r9pV31RqHj9bhQgCFdCbpFCjEr9AsLSxXp6XY5qQLb77CmFxMZhsx3ARubTyPKuSGKEjUkpvyfom3zGv",
  "key37": "5RsGUxsz2ZhMBaMyKAq4L6uDmy7wkwZ5UU83qumdoR9ZmxN9p9ZGWs2gLj94spvknvN2Trk1xKattrKQcZ3EVmN7",
  "key38": "4r4FdUAfJEHvorbibrjzUi31t7rvXgU6CbcxzpritLznSJbymRMui1B1PZT3LVJbHhtEGPtb5YbevUbzBfkhDsaM",
  "key39": "4ewgNoRPr25S5s4dbCojj7JBmYg1GU23SYxuzps7jQXoTKa3jGd6X1k3Y8UKBtfTs2HadqdfdEXTE4t1r9qvdzur",
  "key40": "3R86bQ8XfYamB7ZVGey2YMMNZAZSPSPkCB2MG7nmJZMrsg3LWBDbqJwFWQTTNMjcpKXhaLKkQqpPji71QJS7symR",
  "key41": "L9N3CR7cDx8HQsFpntyUYHaucFbSoraBNR2zBzrgniRPbbgJx5shDqLWtXrs4Qxhr6cVQWUYqgazJVR92qNAQES",
  "key42": "2STKhL9DAkoKdbfEv6PyUCUG9f91xaodYahgt5VXxBmAetv1nZk6WCooGxaP9rx8UFj7JAPFUyLQ3dbgYGuijz3z",
  "key43": "K1jG7a4HSpScSK19MnMi4FuJFp5pxHar1ezug6vGPyALFwgFpBB9Cxc7dAd1c3AwvF5cgbf7ZVmXFsyt7v6yD7z"
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
