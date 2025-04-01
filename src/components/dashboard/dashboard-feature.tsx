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
    "34FuaUb9qzGgfupWGQXX3VRqkZqZppxpb3682HdGPZHZBRmftN1dzJyp8gGiDPy4wxwQudaXUg9Bt4nVoCpD3UdJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3pz4xA6VnTBt1x2xwtJZjS6eZh2FV27GHkJKYj9TXGY2YmK7FZJudbvCP48FxwJDqR8p45dxWCV8Bu2c8bPKrRfy",
  "key1": "43FJ7vzEmuQw6bVgvjoNGt4FBfrpXW7gmdWiLzKoqwinbVk9dXffPCvzZ3TsqTtYGheX8HSbTZt1sLpLr4epM4r5",
  "key2": "5fKUSLSDP5B3jQm4H619xRnZ1j5qiCovzZDHQqFUqBvd1DrS7JA6Yybx9NabmDiCLZMr1kpgphRAVxT2iHg3ZdNP",
  "key3": "5qu1wXwoKjCeXyQcASeZ5wA7KXobqPvXARZQ8qCU9z6zVCS4TpMRamWFeK9eEc7SMcFLzwJYWyFVoYNuogSWuoxE",
  "key4": "3ENHVfhjxrW4Uuxdjwu2apmnXZoFvwt6gmzr6RiXdsYase9JP5pG4w1YKgt2HpJ9zmsddSymopo8R1385vwQTRpm",
  "key5": "4TjK6GAS5q2YdNHtZ2yMkLattSxr2kYo8H2srR2zgq1Ljdh5mKYc3PKNCuTs7EnvpKWTuKRcde5dAS5DBEMefGc3",
  "key6": "279PUAq1fXSqPzDQksRAVnDENtUWYJXGcy2mHoQYRAeqmaWYn5Qgv1upZQSufw9FfzY5dHTDSgvw2ixRYxbMTyen",
  "key7": "3KJ1r4F6k8HMdJgWYwVhGx9txgM5Mc2ftyVmyk7xwjkx4yFPGZ9WhZeQwEXgG13JP5D9HKtn4tBK9RyCnAqonvzL",
  "key8": "2ZQHPnEdGE8CKDmJsxMSMTSbxUor5yyb4dewx6vKtJn1MxhZyLQ3YCqxvZU1SbeNDijBqGkn4zuaxAiVdogphsK1",
  "key9": "2f3XgEFN5SMUi4rXL5Etccf3R3H2kvWZX2m6SycsXY9m4hpg7uJjkx8dRPMjNxJKro64KSQxnztddTXKdeqzTgnu",
  "key10": "5LcuPZSYFbu8LQHn7tetf9EmMeb3Up8aixWXzyXnfey3Epwosw5MVnR6tf96nb7TagJZt6AV8RsHuQLYC2U1PyPr",
  "key11": "36YzSh1bEtUXxpBwJXjFXQhHvHkvwrqwvq38LvQqZoiPygghzTpHqJSMNY9BtpPf8W1G6K6Z59hMREjKnvPfgQC9",
  "key12": "QBYwJxiJPbc3NVAuTMy8oGz6byHW1HtBWc6MAqQy1FRr4BJTKqRVFiouNwrbnFfNFj3A57CguoFxVo5U9GPnpVL",
  "key13": "5WAQizy6akpR8AE6Rmxfuik3WACoPJGhWzcg7bHdjqmQfkVwRr4jS2o7xBUgbhXMvfMz2qe2p1QtRZBJK3TarmVN",
  "key14": "qorUtzEEoX1aKYSM6P6Ydnv74c4DCvyCYcUDUpaK9EybDaWGsuioPXwaMTLNFDA83WexVBbMXevTeTTLpFPFcP1",
  "key15": "5Xi1LwrN8pabCR8SykRittTrBUDVUzX1VBzSb2qiGAH2jGK9Ghm9Z8dZ896PdUa77dQwPsaUwSJAKfZYzsxCoaou",
  "key16": "5XrgCrhCrtPzq7a34Wrs6Gj9QkymWbUmK9XcFETppPAVChx4eEb3JH3WKPmdsMnMz6isJML2MPiYKdMcfD4maZMh",
  "key17": "2cFUZE9bXe68fbCWtX9cMMhKG5yUBzfaKMJYCBGXDxxzHV7tBWBJL8LZsuBXhsDz5AAdXgmbgibBdPh87tuBL7bi",
  "key18": "2svRr6xjifQXpSWAzLbhiZQXeuykxZJ8cqtiFTDsx2kPNvZNakdqxZ2BshD7DCZpxwuBRHyu5nCC83pCA2rGrtA8",
  "key19": "2c9bJpCdcoseyuPje8DDoJEPSxcugMhA5sh5WsWqBUm7vhtdRXzWahMTHkX62Pbw9EXykH1JcVeb8vcUwzLsBUms",
  "key20": "4Nk5RuyNUWpYzYQqWNcnYX6nmM9chEk5bXZ1RMkXKigasqCzFJQuG7rZ7R32Zj221f5UoDyiUuUpBjWSD6eJKYjB",
  "key21": "3LFpnFqFLv7c8hoSCo4qZtydHQepFcP9SzYzpX5zcY8fp1NTwWXN4XVVzGrm87juX5QH7HqYbEZChbarYdG211dt",
  "key22": "23PsSaMu1aKJmerpjzSRKuyoyVKCMCKsUvN7UhkbfUHGXhb7knLV44rBU1LMH5sfSahBbPeRxsjvSWk4U63qQGGG",
  "key23": "3BHsEy1FyQ8nFQMDMtbTdVcS24XzZEyjtX1ubXbrVPNEPGLdqR8kdhbVcWwpdZzWNmAcJrUSKfFo8JXqzGWEVC7r",
  "key24": "WwrM1b56WR7DCRrtgD8tcxazSmiF9wXGW2UVELFewJx8tvtL42duRGnKJXbyWiD46gG2vW13LfXsVj2g9hsHctq",
  "key25": "5oK6HNuGwsfv3co3zFFg77MwgBmrBcGoGuwxus266Gp8AcK58gY1igmuzuo8k5DyenmTr1NsF9A7dwZsCTeTMacG",
  "key26": "5V87Aep9uXQZbBJpyLzYvQ7tFuX25HKvvegwrHhSCa2FKgyWVFKPdHQj1BLRwMoopzfqAVSHUFY8Ww3QNS4BD5nM",
  "key27": "uzoEVetFjbCoZxExkL7eYVmRys2pbggV6T8o7gRe1TQpLWUpyTtWskBvpvmLoqXdhZKMD9sHoFVXakJYeEZeZLb",
  "key28": "3pkb5LtcQsx4kh5awHX3GTogdsqWjb2bVFtqPd5XNhCfizo7VFnGXwsdZHHGFniNvgZoxpcTfrKY8H4unghiWMbH",
  "key29": "2bDY1j7tBsFhkvy9qBf2w3GJzoL9pGUUAeXHMcCGTHrcJbEkBMTvKTZaToxsxBh6Tbkuk315ggcP1FZmMnEi37K7",
  "key30": "46fsMLK5H94DpUjkYshaNVHZ1qKthFY5kwi8mxkGvg8qWcCgCUX2hFxCrf9esrQKPo65vqHVNdpJyd7i9tDM7S2t",
  "key31": "62zBgCLynZeaACXgNch9jxDR757Rpi58EW9W4hBNf3dLMdiMf46QuMzDAnNyCnRNoEjNqkvKEKCPgmCWhYU3j5d3"
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
