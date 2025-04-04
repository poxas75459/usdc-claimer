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
    "3MGLFUf3jhw8GteNk8xP4Rtvg1f6ZkQRDE2xjqqEVkA3kpuonesZDGaZNePum3nn59iUoemHqrFfN6Vyt2C8Ni8r"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3uzj8caM3YCUVQCjinULtTVVYfEsx7ayrbddizbbW2V2NcmYaHM5mwobjSF6bKtjZb7wP1ksWSJR4ESHxgu3QwQ9",
  "key1": "4wsmdjpHbJWhvUn2dcnYKVxxu11hAkQNudpVEnamLqEemFk73UogrDiejvKj31kF6EEVvohmRWPdg7iwZ3z6nRWB",
  "key2": "4476iS4ZnEyaPj5gDcLYwJGQzy1YwUi3t7mTEp4BwQaA3Zy9rHet5bRyvVBCpsQeSGzEYjkJtgc4z4Lw9ANTYWWz",
  "key3": "3besgyScwWVamuwSfe12ny61mrHnfW5kdHT8SBGjqSdpufMytyA8dhgLoBtBMoBdHcSVRm2f7h5s6zHnBKLb3aSV",
  "key4": "275tZ95MYnTZKeepjhhoT96pxWycRUSEhqsb9DM92WoPmqDBKVtL2XdcNe6V4Cr3ccEnSUk1Rtm9dYq77D6NhUcU",
  "key5": "cyiNG2WphBM5wpDoceDfsHsyBsyPdjbxm2kbz5WpsopX73nwWWyzGFMsMJRw7N9SLMuJCxCnbCYdk3wybTDXLeh",
  "key6": "QJ21G5eTsAinKWdFJQfd6Yxc9wpioqo1nRN4ghCmBkQZWKNnn8kMWMG5MZS6yD8Kn7eep6HRPvPsc8Kk7rdyxzW",
  "key7": "2FcTtnSc8QZ52nRsVJkRTzmLc5QssUL6hj3yGpQPqBaME41fA4nMH36AaLgCfvFwZCbRPe39cnRExUCokuMBgTNh",
  "key8": "zSK4c4qbH2yLtWo65se33R2vD9Bw7b3ZjYT6d2Bvy2P22st59Xy6B4dWtfNmcQzBnoWfkkAYZWJDKwBDCo9DH5v",
  "key9": "V6VpD7mDmK3bYbmnDEEjaj21r4FWiURdtmJaQMXDkT28FjJK3aeAQkTVDqEroZBkL2rC8iaFBL7XKJKZU1rfqsU",
  "key10": "3AgB1ByzJ8M46NF7wHTHRBmbuYwGUghpoJxcZZLBTzY9PRdNCMHFTHCpXnL7D3WiC9cgV3o5X9yWCarLjtHKoXvH",
  "key11": "31UatmLaQ4uaVivusY3gBimGfxA6j2PxBgZCSgR1a3FnFFZ88ScFfRSXj3wWC31VNRiixBqsQue2tMhYxQedTPcZ",
  "key12": "3gADaBTRJRtTHJqfDfKJFnu4EgWBmWhypDtsf4Smus9HdQtq3TCWm5c1w1HaCaWLD4kByKtFUJtAACerkeGFmzFn",
  "key13": "4g6UndU8xvSanL7CLs7UPP4GdGoEdCF2fqtXUXFSXMitSJrNS9c2afMmyq2M5uJGeqiyzhqQ8G3mZtoo5UEYmxGe",
  "key14": "3s5rmXKHgtn9cEfKwZQburcC2LtGjDLBMpXEKD7LiWyRrm124fFueFG2DvE9jTBDXLBh9sAXP6JSXa5DMeepRfK7",
  "key15": "EFxzJtTy69xXJGYrDfCdA1eubzENvJTeJWdK1UhBtCryhuVoec6evAxDkvGF9YuJmdWd5t5iZ4xXEaiCtqH3JRy",
  "key16": "4WsMUTy2F29jVo8kaij9Zgs2hbEyHAeDNrLodGxdjbTZdzCoh5vRMuNL7uVKJERQxSuujba3V9hH99vVv629fjSj",
  "key17": "52apgH4cpVHjivtVn5treoGydBo7kCC2JAwgSz5di4HLbFx5QBQNdunWdBP7HyEmvVPwiaCUfxqdJobsA52RQTd4",
  "key18": "5thLGLz8btexyJhX12P4z52woN5VcCHUyzLDnkU9vVDUWqAbTeNHjY4Dz6LmtqKD3K2YpUo3VmkmNggpb8xHbjWe",
  "key19": "UYUMWsPRoBW9RX2cbymhAh7Qaa12b6xHY7WnWD7AkMMQki9dT6j1Ex3fSMLnRxNiy3mEbhmxNPkaXpTrUxJFBDM",
  "key20": "5RTYcZtVUfhRbNiZnyo6Hivhigkac6ZJFWKCKikHEhLn464dYGPL7GJacFzXHf6wtDRNkrRCQie1bQyMeueJ9pgs",
  "key21": "B9DyXV4L57A75rfCSBzUubBUHSeJSAHAyReRNxXaLZXfSXm6FHdRoaqt3htFniCuxUFTiziYsr3y6dGRJvercdm",
  "key22": "2jyUT35ckkAfniFwmtZhA6LZXtoDqkabKL5uqUU1tgogBcgDqe49QwuBCo9kLcDmhV34qiUmWCbFWcAHbxzT5kUq",
  "key23": "3CgmUFQz3mwB7WJhLtrudLkxQ5zWDkQuxGM8aMBpDm7SaurfrZzoc7SUFKDtDgx3FubTLDVKMRxeaHguajVEJnHJ",
  "key24": "2PewRT3ix4fxF2XHUYMgNcRpuEeSEvQJjjAJJJHM2g1V7KLUPuphm7jHo6owa3r1gPDZB4Li2XYrnojSrsVEt1AP",
  "key25": "4N8iQTvnaQFnpBMDXmgkTxgn5t9GhQhDPNGyciEZFo6aH1VZBCfMVDeb9GGTa3bveY1WFTYzJGRSTfDFfRRffMXB",
  "key26": "5Fn3zgevrEFSjN6HDja5RoEznuXgo9GfwHgqEE368H17uRbaWWXx5yBYppp4pTdVSjLSephXCshEuXbKfyWRxQJX",
  "key27": "29R6FRBg7CTquQFLNWSft1JDSPn6uET7jEC6PAmcYTpNpfidQZF4MphYtMbsBGjpo64JtdsJVvgr1jo8rGKjwD2N",
  "key28": "3xggZ5kFDo8x3QyAby1LdYAzTxdymUDr7Ybmy4odXwwQgQT8rSds51iXLcDWVEmFGYtxsnRtb1SRj3w6jrwxMyv2",
  "key29": "62tL9FJPQEG3edWXb1jv4M5oT1nC6DfhHsELbJUQvY5nFdPKz2VHPUDfdqG4mu1CQx48f1Z8s5zbSJu8XrEicsnQ",
  "key30": "2bvo9aKBxkSzPszyB2BtVEh6AcmWw7UVdQmpPCz3AvFHdH1ogj1QkbaDtgUpkqEwy9rdnmnzz9Fy6H7LJcMw8Pd"
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
