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
    "4B4dAvgjKUA9YigLNaxNskHSP6NLT66j45U2XcBWJoUwwYaqTyqHHj56LVHM7Bd5w3Vcuf6cBf6GpjW8dFCbWZa5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2Zb2LvKdMLMZXw8F1QBXHWndvvFYvHcYQe722eQeX1JTPN3QFkfoDwCiSVu2to9QGg3fFrac4kqfmXDXEQqTq2VE",
  "key1": "3PAKQMxXwsDwwFth6goGL8v3Mkdshxa8aHvmdy6MZsGuvPSWfcRpBzu8yULYAudZ4vDRUDMwTUh1mtB5MdGMeGLW",
  "key2": "538PHF9cD69m1VHSMbF6RLiKdgcNzs4qrFK8tFNv4ciKP56sCqaoigMo68qMbMHLeKtkeAp6QMkD8zc1X4dEKYKL",
  "key3": "415eUKifyJNyd4c5E8L9FnTHQC3vD2apDk5fy8syLo8NKo5PFSQedex1VUDMkCSX4dcqpvJ7YH19SpLrBmumtwWR",
  "key4": "KDMapesLGYx5kmAsXMzYSWgB97d4bCuUpzgdaj2QUUSU6gRKxysGQ5EB2Xc2P1XYYwcikRHCfifNkzDjkgKeE4x",
  "key5": "5awrzXYK4Zf2mj3iV3N7tinRKEGWRr7PEoUp159A8S4rwEgakYgd8fgVGHx2WKYSb8SeTuSMasiQhFyFJ9K9SyD4",
  "key6": "2WxPXBsXK2vjAbJ1BEyyWEsyruRQfcybtEhcnPdNuWTEQihnfwnMeQwPnGFeWQEtfZcuMri4vdMfeTGaAmexVdF7",
  "key7": "4yBwVqQagQVFWGL8qw5KXwHFcvjxczFjZ7ogsVRATruwoQM4QNGy5ixZvu1WF8GtPPQrd946eUsRcv93cfr4g5pW",
  "key8": "5v4AX2NT492BzRdh1VXvqBi4bz6w11mVDVzraT6bUPvV5v6qHLhBv9nwzgkuLRXBkesbUyzqXCjBPhRd5S1s6wCZ",
  "key9": "4oydtYp6FB7bXZLygysQi1n9VTxKnTzubVrZ473RXCMRqL6TFSXYgvccFnE9pwjwqc4Z35Qy5R6vgJYqe3ghGZHU",
  "key10": "3sFair7GdWXdR7eb2mMCVD3V7JRdRW2VFK6suieuugCBUUcZZnW3w629sD5T6G2gFSchGDT17pKPAhLmrgBwA9VN",
  "key11": "2ztASrmuCjDcMZLMkX558j8De6qQb57TKTeXi5rEieiA6qjcqFfXmuYMsVM8jANJc2FX8vshS6eg2bF3S1yNgTYX",
  "key12": "45HHt8X287rfPhyXc4iipumxbf9xV4PbZwUwz9taG5ZFCjqdA6jY5wUrbqprKakn7AzH9K95eucZ8NBtZb8ny19P",
  "key13": "5h8G27YtGqemzqb755NtpBrm86oq6LdHaNzwouqWcEJFNy78QQWG38AXS8Hv8WeaUsEya9diD1NeWUTYPW198DM6",
  "key14": "on7XNZVp1M5wid9rJcqwjaD4NWPKtRLwAKanoapQXdZVaqbzigxDiuBNmxaunoKTVjq1AHWTd9tg8vCpGa2HWcj",
  "key15": "5zi6WYvzHg4sRp4ibKnQ3nqomjLSnQ8uQW54W63eDiKLkRMhMHjo1nyKqNMeA6wCbbDdZxoHYVnfFxsrJgjwoaAo",
  "key16": "4hYa41bnhDYoPUSXL33bYBMYbwesJuH1KyuE5cy8i2kgEVZWCoFqDj92B83aUcbiUMoFRYDm9kwYZGLo4vdoswCd",
  "key17": "3KnRjNuqLWWaxyPcuYRiDXz9k686R6MCpLZv487SR6LKaEaqPpKVujHUyEJEDn1XaTwkSJkKXLKRo7Ls7ATXeVJu",
  "key18": "61Unq1WYSu4ZgQRarrpznDimsNNbxQ9DmommrkVxhVeKuVBSnqk4tGw59RQAjXLc3gY2WQMxogAQU2AvzdL1muWP",
  "key19": "2jzyc8icr1GFmJnHXgnoR4PRQPyJ2HKUDSvCQmw2Wja2fxPSN7xhSTZGBa4ndD5gQQeQQofA1uaePsWgnC2tMjTz",
  "key20": "3dpXdGa1No9vrqadQTHu9G2fVcPQ2LaGoMpXsxp44AzgmrDTG1FXAiHJd1gCPnFZr7CfE6LLJBnxXNPyiAAxzq22",
  "key21": "5dKu4LkSJBoAks7gkoPkmm7pJ7gTCu2f3JrJbDH7kq5aY41Y8RbxxGCyDXzGTJSs6RTeV56ZgZJ4AvSKtfN3SQGE",
  "key22": "55NGN3FV56junZj8JHH82UwAyE8LBr8Sv1vHiVm5ngePgk5oV7sqDngEsHkMDWvWY3TiPDzkKDhBohCzmwNhCED8",
  "key23": "2jZKZRo2nPgpQ57srps9HDxvPVFa21Cqt77od33oxVgJcukDBQT2CntPeAc3MikKP3TpWGVyX1Pby24z3ceDNY3U",
  "key24": "4wK5VfciyC4vuQM3cP8HHSyKoCbBQJgXKiXMc3E1uAesSEeh5Y7DCjRgJwhydgw4gEYYL5LobdfvLcuYnEEPu1uu",
  "key25": "2hDWE1cgDBhDpq7EUc79svz6JGB485YT5H3DuVBHPbjE8xbCFJ2BoZKsXWe3oGV76vPi7bR4gGz8Tbsw6drEq3Lk",
  "key26": "5BBjTEq4nzhsJPsp8PsauYE2c87LE1FCF21e2dmGvTi8gQrpGid5WUZwdT1xks1f7KQ94xn1xKegL8veroe1yMhA",
  "key27": "gfVEVZGuGuN7vwLPCC42WBUviD3appEdpgVekxXgiYEARaWNKuXVKBGVkyStpzwg2W9Fqwx6EZM7FRDKiwcwVKo",
  "key28": "3aVFEcSHUCxdcKM6U7wC8tLQ7A63KWoVAeqR1QANdPkw7VHbPDFSxxkMjXT6GA1A4HJoY8UTDorT43JpSemAof5X",
  "key29": "UQUSP8zreup8ashdPiZk39oVt73855SNXf43y5RRUBY12CKUq3anjqQjK5n72WfA4c416hrS8mUsCq15BFiRFUi",
  "key30": "9xDyhrJmKbRqF6gFsv9TW6Y2VKerdBGRcqCiC6kVu6yVS3fpx9HCvhoqSDucwXdbwPDN5pzmkUGs1PqUkjGLGtz",
  "key31": "4JcAuoDLT2Cw4qqbfCGTBT9TcWeVrAY7ZeDCnXnGC5eAu59ckCiXGQW7viJPendsNmcuHYfQe9EkGefWrivXaZvW",
  "key32": "52yCFqbder94Xd5bgPaMMxr4rmT6EGutm9QJBGV5MvDvG16sunRvMczwX1y4aWjFTGVT9jUoCfr15dNu8ZvgsTjH",
  "key33": "3cLMStyfFUTEA4BoMDhgjfuHDw6dhvwUisaiaHvFakaVNwawq9jiKKWXXA43mP3UXhQ154pwYFyZXjLqjM751U1j",
  "key34": "5VL4qFy9MmWGRKZdt2ZgwkrcX9f9ftyQSiW2mYaWBRNtEsddbuQrnkURweF6uerxHz1mAZKyzYq1WTFYSNkjKxdb"
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
