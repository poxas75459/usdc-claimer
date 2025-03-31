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
    "5iP1koSPTBSk3JHYu4qpnMgdrMipXdNrHpPEq2E5Gyr1h1QiFvGjdoSMKBbNPbpZX2b1gjauhjajmSWjYdeKgPEp"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "55vhx89Cgf8BcfBEtRRn9hgFHsFH8gj7qAgWcSAdFg1zqV7Fjmus5d41xj9rXTqiWX7v7NzGGBKkZT9iELFLZ1a9",
  "key1": "55kfyJP5CJTsoivqZzkdZMJwTPG6CWTYgBnEUEDeSdbY21VrjxV3SnkFhfDrSunthVqcNr8d9LbVLE554bshPsJ2",
  "key2": "2funr6fEqCVZ1iwoVPxyPPxGtgyJ3ipuBjyWTKCoyM1dxY4aFwwjHL9dGNAFerLrbQXXTCio6RGxGWpxm1aeqNos",
  "key3": "P7Mz1yytwLbrFuvj2KHV2MbqhAmhCbfx264Y9KN1UNgvXgB1ZbstBnT5SWry9pmDQyAQ8PjB5GyiBnrXWtNqBzZ",
  "key4": "4vhQNd1exB1BJwEiHj2FFmrNTYkDgFqge4pWZDWVKdapdqUAVUQhqhSaC7zNSTmY7xy2wbcUXTQKqWP4XyRq8csN",
  "key5": "kjNsKUccqUPoCnbe7zDyiycbhW1S9E9CyzpAAcrAUfo3kr83DJApi47pw9BDhGFPhNwzGRZXTnkJLkGqYEhLrfV",
  "key6": "3gV6FFApQEhyeLf4bkaUdjbNpK2xaNo7GJU6ojq2JS1FuZf8DCSVQXyyaF1ERW63QSKE9BZ9ptxysKRrNWMgj9ZY",
  "key7": "4Hk6BUCm23rc2husfxTJ3Ufk2g6uhu7rqSbqCvEciUUsg7BPNUPj9JALwfbi4B81Lhij86byCXqiNVwpbrYYzL1E",
  "key8": "2zeGqNYCGPKdCCZcuCjZCgJ9juWQobSyZ1BdJYWr71FZF1ZHdAgfE7zSKsNx8pNJpov2zjUe1kMBxR3AC3hBt8WQ",
  "key9": "4jxNKVyEacUfV64iRAuj761ZuMu9SW6zn99JN7a96SwUD2tooTRuUjuMPCSYRZCmJhR4hwZwuKrQTa4cBr73suHV",
  "key10": "5FXksHGHE1kkWtNMvPX5zo2GyNhh7jGDaxGKLdhMEaq8UsnmxLc9SE22u7vwvHFqt2Qhzu7MbnPn6wdthv6ujgvh",
  "key11": "5BjquoYEZ1Y2u32eojvG2ZgicF7N5KHVbQ2UGuAgCq2Y4RtVwMarZZXgn3EpKPTMEkX8NebuwFWA7LkGqXyTZgzt",
  "key12": "2vpadu2w3EB6qBGWhrndFa9qzQVSzA2H7nqAzMPASo7teMpHHxWcKWxsaNyT1GoJhtiCpazFhDkdXakESt6T5agU",
  "key13": "5KeUPMbsqLG2D1osftTd3Ng8GpvtA7cs6eketLcGeFykLJETJ3ETvGGvdc17cqRd3mYuJGiA86pQKKgY5NiQDCk",
  "key14": "dnGntMY3gxmDNgji7QJU3HPhrQV9YNpPNxSpjtzWJDFGKMr8LRRi8bzXk5CaqmWWQRVeF7PhSrqpcoz7oam1m51",
  "key15": "4naDVqAyYVsnXphpqHCn5dFDp5Uug2XCpfw1HzSUVtF65v9JQ6tuGPKtMNXhzy8wfvF9LSEXsV7xAseD6Ua6wo9",
  "key16": "4omPWQBXYa3aiF1JWB1oxQ4ppCnq6VorDodMd44LVWck63qWrkNuxvJ7BcC3pXuWhhgeNtHfKrWvK2BxipJ3UBx6",
  "key17": "5YNyPF8Q5DQZCkKr6egB92oaokZmExFDZgswZWRaRYEmoM6qqRaNgLXNSRb7Yzrsk7J3N6t2iSBpekVWmdqrTMya",
  "key18": "2cLmsCRZuvrmepqRRyu26AZCd51zEkeNSq9zquKwNvU3dTifZiBcecQQAZ1SM2zNXSsDYVSa5F54sHcqeDftLpxL",
  "key19": "3k3V8dvb2XopquCv9LhcCkA7ULKFk6f3DYqijvSypa86ozVj4wbkKnEY82D9sYKyNm9pUtNN69F88WaBGWtn1eQc",
  "key20": "2GiBcRT9A1z2MBgBxUUo1c4GpDi2vLanB8YM5fTgdYxsKLQXxzbZ2QBMRsYK4cE1ESwiTSR7BgyJ6RQhdfyvYKUa",
  "key21": "2FVoqgoGNqNVwWeuUcaVYB1vKUY6akrx4XyZ9WppoS61ekQ8UyLMJEYSDwvD1H5eEJZZjqVkUiGFQT3VhN8J2dna",
  "key22": "4WTxwBRzCqFAbFrNGsUmabs1PPnEwXTn9BNxnh6nEasxwcmbzMmHXEnKS1CH6g18Hjr75gAj3o2BWWsWrMZDkY1C",
  "key23": "54UHNjWCMAovyr2jbATysTbGmzyd5mhG3VEvoBuJU3vNiCXR6CwLvrzYMZs9rN2m3dwJ9g37XSeViKBmvR9LFAxm",
  "key24": "Nx9tUYAt26H4qVn5Y2HbgYBnmGh8ZbFn8HZ8hycEUVN4qXirJVDPMszxZvHU764hXjkm616Knmyx9uYB8hYgQwp",
  "key25": "3UV4z1tLsVvDmJTLsg7vn77MdJ7nhCgv7FXJenGb6qRNwyY5TPDkd7pAFiEXSfXJ33BFuW9NZ6btmY18bPtaxG3s",
  "key26": "uZBsF85ccedXN52DfAT46FdpHjiCjKHEvxPDtphtVyBFnntTS8HJokU9mtpP1PXxYVj5vNn1oB5zwX73exiTjna",
  "key27": "4GDy2MKPhRgiqmBruabbFmBdsDJrxSXG3yEKLBMQKgb5WP1YvWzjxKxSVM2dq97TPFTTJivEhKaXTYZfLs21F49D",
  "key28": "uEr1aHTjfMZsvH23RkdjKg7BNUuCgmS5fEHuQdP9YPsPgggU5F1fpAjQhEPuVtjowDBKxxb77xkv9e6sU6SsL5k",
  "key29": "5ErHpPuXTcEvebdWWLCJ8Lxibib9JFT4tn4g176VZYqWZ5DXNHTj3V8hAdgGNauSFjz4dUHB25wxEotYgs7mcMtr"
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
