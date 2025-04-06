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
    "3szuorEeVXWzdc3SpQc5orF3M28u2AwRL2CZScKxkD2BVoXfdLgg1Vn3sti1pe7E5zd4n2WS7TUm1Fk6r6Wmariy"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "h5UfrAqtTZ3eQQbDsxnGHFt2WtYYEQ9WeVZmy8zvhPA46SwGbtwobkxHr7XUcUDYqUte1kvvRzevy4DkrDwGEFQ",
  "key1": "4rggx5m18mgtu2XTxX9gXqGLUwjFjiKr8MxHkwiR6CxiE7qkJ8mnciVg3RWwo2e5S828hq4C8cQvZ5MMJy3iEQFS",
  "key2": "2PjNBwQqdtaehtAu9VcUkH2pZS8WM5MP7cb3AQpG89whEefNCTbRXpJx2ok6rEaTA68jEkhTY9gFHyxTm1C8GMqx",
  "key3": "mASag5oUp3FRpTJyUGpxAa1r4x5fgtLsxP8ZzYbMqNf3ttxNSddMWXNCLCxzRk9BQpn4QHHGqTtmCtGUM2Zf8vk",
  "key4": "3sB4nEE9mZYPrVAmjNUGyV8YWH4u8iVGYRDcAob3rQ6LUavZASYx2VfWXiSptMCpftR7irgY4VNkqimb8mvMB8jx",
  "key5": "4qEhMiDdPaDW8W8qgZTAdi7emg7WMC1Z8Nv17zvgi6XgruoZ24mkP9fjSrYsPKKZd53ES9QqPezHH6YK1NhtN6D4",
  "key6": "udKvZkHjVBJWY7kpLiEh8xAN73UrVCRP2gyFeFse1qDtV2tckeFAhw75421mbcDxvBe5g16mL8sB2DzaVbBgqLY",
  "key7": "ydeh3q35KW7woKrMYb4dMaLvHsQMn238XKMKcPmQq15EQnKkednxnYKrQ77ju6gr5sCgaPWVpk9CmYL6UvemUaZ",
  "key8": "3aQF84BJDjdqrkHdwYj5J2WJxAMj9wSf7uEgV53TURX2B3ZpeJewidwXFnR87nGdAF4PXviQbaCnoWMFWR7CpwCy",
  "key9": "3S5bDSGrUhZRvDpfebj99J5hEKNEkPKZ9WUGXNbzaWjfpNqiELE88SCBUx4UEdLfFKrAT6TjBZ1bNjCbjub7nHXJ",
  "key10": "4Jrd43bPXGHjFkN9RaR7a7F39XYk3QGYUxj92VxuHae2gwQynsA1uEYwNxhYpq1Mjay1KwwvGkzXox169m1vY1EV",
  "key11": "4HTJ45hPahJ5Mm5JqbWzygqnf5nEZw7XEgHecfTd18MygsVS4beeaXVQjaGRwuyFjLAyhVVGwTUAXPNUTabpRbaQ",
  "key12": "4pL5VeVWJrTEUEThGvEfTYtGNRrL7KB9qdYpuy4SdLi6yCSc7yMNagCbZEwr35hD3ddE6f7LPnRMZbkM4ogCLPgw",
  "key13": "32TthEAibZ3fHrPGz69bWAvyA6xKXRAmhxEbjDC547QeLXjScQLsE6geZGcYMV36XbKtY1GGAwbtYUAkuNcGd4to",
  "key14": "2b57BtEijHUMcgM85wjn29RPq42q8H789Y2zrXZud9CJyTyQWv7r3TdJhRTr7MmCrfmC1nWQy1ont6h6bj7XReLe",
  "key15": "t2sHU4UUr6WCaDvobUFV4NyKBdKQij3Rw3YYVwVNzfYj7BLUdwoPGg3u7simLwqWqPDQWQaiXBwCkFgg4FAdKcS",
  "key16": "26PC3KJ9Gi3L3AFvaXdx4i3AtX3mnxaasrsgXuPwj6G2cwV3LwpLuaxqJnfbnYVFnGDRDbaN7BQULGLWSxJRXHJ9",
  "key17": "4SVDMNcxudkyZANgHNJc6Qfd6Di698ounjAuqwYfcMZmCFLrazLjpGYX3g3DH9NqNpDipQiSVs5Q5TSUSFg5HadX",
  "key18": "Kxsyun5n2wW5iybYRKfFtMgTxTCn2aqz6LzvFnsFPenKArygVApZzbTH6DHNJZE6JNTSHNCobu5S8S1oS1yzWCD",
  "key19": "55NtamcMAkg3kheBe9eLhyejWLvxydQwDAv14oAWpeNEEo6pcRYc9PsAu9d2Yjbqdt2EM68ckMwL4wfwBdB3KrmQ",
  "key20": "GT5AAZRh1Z8ywYdtotuv5t96VdBNnEp5xNYFdeJLVGUBEZMzbiubJYvdCuvkhZnJwrABkUoebUk9CM1yWLPdNv2",
  "key21": "5eD1NAWv2JVrrgzb8tFQDuqQXooSpqWYiXC2KzmczDk3MRBKwXUdngABnD9qVWjFv1qWYKSWjrqVyenNWZpHwaRS",
  "key22": "2YTdvo7z2m7JrqQ7ET4TpKGXByKPHFsZT32B8MtnLAuEqH2CnGKnRdFtmohSFp89kmGGYtumazakXddojgbwVod2",
  "key23": "3ccYUU35SrNhqYVWd57xy4Ezg7e9AgFMoJYCbF7DxXbh5hAaXNZMYLR5SB3PyRRSHFFd4aci8oKbT2STEVAbeGL3",
  "key24": "ULCpTPZPrMFRRm72X5vRwKLG3egHEJhQJgUvF1AYCwDc2SdMp8mfKgtL7XWSn2obxNP7LGERfsJR9M8Rj5n63hK",
  "key25": "3MAyFHLkE2hkruw568KDD31ywDksY7RdGzeyKPdPSNtAr83quzEDivTqSoUpu2WEFtYjA6brKkhkgZeESuVbdyoU",
  "key26": "4wwQ12kQPWYtAHD8Pm5Tiah4qDeUGSGGL4sUn85FD7ThJkZ7W71J4jYNnWBawMWzRdQRbM2UmbSn4WuR2AB7nyiC",
  "key27": "2Tb2Tvngh7Kyx2xe3mBEkbchGXLrC8TXxmcVKVoLDj7cAnSyLV9zsm6NxnxvTMrtNxqWwZ2wc8G3Gj3CdJKGB2YB",
  "key28": "35CjrVbn449HsV32NtL8v56jeRY4oVSpiPmb1cBecZr8WnFXSFRME4DWM84MEefZ94vCHnNttEfruWkJ1dGGxmqi",
  "key29": "5z1cZFRu9Q3Rp6A68HTB4HWPxSBCsF9AGEHdJRWMFsiEiYV5bkmSzkHA13ucYxv7vtJf6RDBMbkvZh65e7LFp4uQ",
  "key30": "2X6dUR6cwyV8cAk9C6WM5prbstbb4RxWXFHbmnWVTyjU7LTBXzyJwmwTXPcRW1MMK386C5SNmRv6fXJeZwitK181",
  "key31": "4iTF2SzWv7T63TjF79UvoL81BJNZ6difWSEwwPxdxH3KfbpH1bciH3nsn1yh6oS82TYXi7XC18y8qBqMwXBxGTku",
  "key32": "2Knfz9jCrrojkUtMnBKA5D7Y3BskQf1iNxKwJFEVryzbtNV5GUbiL31JSsU7erwKfNsTEDN4mSFB79Djw5RXpp2w",
  "key33": "42dHv86DoftZwMk6f3qmAYWLebQFyVFnJHr24nP1Pae6MDkBgJDEWMnB3trZokNuNn3eq6gBdi5zPbMrwmeh3R5m",
  "key34": "5cdiip3ejjh6DEXT7gnbpZ18qiMEwvgvFqfThSd81escXsRsTCaTbHcijobv7XmvHNB7AGKdm7VS4NtigfUPA786",
  "key35": "3vrzectPFRwEgrmZySwEU6sMbPgZnvdi134jfEKacogTN67Zpgc9A7V8HU6LDaw17BZcCdbu3ttt4EmqN64Tr9Ee",
  "key36": "5ZzNeuJnEkwvY3zJTCpgnHS8FWmTebU2tDbM9kwkXxzzTeuR4GfrmmeMsyz8u8SJne6Mmvnuf48hmCkh975vieF9"
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
