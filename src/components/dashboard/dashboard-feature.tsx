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
    "4bddyZShovRUER1YborH7w25go9xC3cexegFuf6JeJxGUCEMAHVX85QJvgaWkf5tWeKctFNErZKxogJVPPrrWH27"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "45uvGu1Hxw7Gt8PpMoQB5TWdfHBACYWSExkDV6P1i7rHic46ay9ysfZBH3oCq6fXEvfajdWwGmtFwFsNyiHLh4gt",
  "key1": "3e5yuaJJFuo5TP2b8oRvBaDi5f3dYxrGbb4qprddckdP9qu1Jfh6PQD8zHvh2mGmW4hNEgMS4HcqbkTbxPcuE1sm",
  "key2": "5YEjEEBwRYNNtjkeP2oh5jPU32QhWixRf4F4SYDcdqa2TT6C3gS2gCurRGi3FsmoEfpPimYARWebSvVziJPqu4m2",
  "key3": "Xq6nPzKk98zfs7y7QDwwJx4UZuoikJJbq1TrarP4Zws7dz9jRp2LXQj5qQycMw1NraMEgfe8RVyxZhesfP5nn7G",
  "key4": "5M7hiXeD3ZehnReLpW9u4uxSzQHDeunLPg8nVyFVaD935bgBJfQDNSYRr226hmymf6W2ooSvDTPUJXApB6M9s334",
  "key5": "5GXBcVVVGRNDduTd6SZ52CxFbLYKMQ3EWNqMFZNedb79Uf5mXpR84NSuJqStbBBL1txSFHgt2F2j8DGFF4aKMg2H",
  "key6": "yP79rRgF3ZTX5ULCxMLvA1FgEf1ykfZ68r9VTdNsDRzY2U9W8ukFYvwhtJXEk2KK7fCDswe1dqHWa4PLwb4Dy4v",
  "key7": "5fEay6NvTJtqdZnkWBSsR3dpQVGAuogMJVKoC1QbiFxzaq4kNWnfcZa1n2xX4hh2c7GrKvYyL5goiAucoQipZCMi",
  "key8": "59mc9ckDycjmAnzPvh3QBYYHx3FFxXoP8ScVWQBNBMumn28eTNah2kZ2mX9JsR9PFKbuhpVFDiLgHFSU3dzBvVyL",
  "key9": "4YzLFUHtTLrEvdbm8wB8YznEM8muZoKPeqBD8hPPMFW24hwCopUuUst4ERuo49PFWLaB8B5YP2mnGiXdZ3HjPiEP",
  "key10": "4x1gHQqXDcxn1oyeRPPjhEaTooA3qKcy3xY1dPYtV9xp5wqFMvr5Vf9Kh3S3gVhc6TcPDLJCEP55nuvADB7JrZq7",
  "key11": "5TtoptrucU1MXygxUJ27Wbid36hpbAWcL2Vi23dw4gniFJh1WAAuCV2CCcSmd6NvPZkrYe2bbiW4j9g8kXby3iR3",
  "key12": "zy7o2auexBcRex2E8gcqqN7pEictTbGpmUWF61MzcEXs43R6px5YWuCWhTqKUp4NZhwnn8MSgVsFx1YaiQtXp7Z",
  "key13": "2cERDtbvUhnrH5qYeZo24VpL2W557CBVhLPXVGi9JePPZshqeLHCLQKc6L3vrh9FqFg1hYhEKB4W6GW697LoiibK",
  "key14": "49xqL9Z7QqNxuGUNKFeyfzee2FN3ry9uoY5cCcejv4fuHPYSa8Mg2PufDyUGKktamgn86vYmhDEXHThSyWvZ1acn",
  "key15": "2pecZ4H5VUH9AMxvj9KfVLNqsxAby3zWLhREE44NxP6mpEFCNjfVfF6ojWHve5o54MsAuZpriCCd7pbEhWjB6h2n",
  "key16": "cerjBqfPSQ6VQFx2C9PiVB2LvcsiA6sAgmghJRQQGZmDQxXJta2UxqSwAVnRtoz8hdAuhH6WdLpHHxdDmWxVrw4",
  "key17": "22Y2tZFZADWtwnPikQrWxNJFWT4gAzv6iwPszQb27FTi6fJ8rUyf8kyyRffWRzLZRWoHPsy3PE9NBANDj9NfUuZx",
  "key18": "4zaXGiKhzDQU95TS1731pYSm32HsoWVV75DeQ6WTZrvJ3yfPThX9uFs9H1j2sTVxiHPankGngdNV5HCNhsQjsmjo",
  "key19": "x3toiJjyg5qbDXrt7idLmoxEPHkpkqycxQH7V6LSD57WCFXPsqpS4MiTu7sbnR4HaCACJexdzjquyrrJaJLfdui",
  "key20": "52B6fX2w8LDhKCjfX17rR5ayuhwbijsBJ2b2Z3GXR2LcahFxkQjhxMeyx952L97gV15i5MYeUtNHadVjJpykgWMD",
  "key21": "J5yS2G8mB7qkiZnqaB7cvjGUAcH5jGEe1ZK5TnXGakui6xoTJLijiJJB6Y4fBEfAiHVh2hAFDWv5eVPqwL8xpyL",
  "key22": "65qEAvbBKnq1vyLnpjtKby76NYNfhfpcKTTsRXQNqZF9o9MFQvRxLHqJn9hrQsSYwc9yUfkNtNCXiw6AvpHdyLur",
  "key23": "5ddEJfp1cn1TKt5n7sUirBdZG6o9j49sHPtzZs2UpebzWe27eTdLTNZRXoZQf5wXZoC4DZv9XKarYSK5D2c7VvaP",
  "key24": "4i3GcRKLFF9bnKwRpLQT61kiFBZdDPnFGpNdHJkJB458psWunVDCyrZ9wq98CUYbBBC3faby2CCCQ25xvhBXTCM1",
  "key25": "2bkcMTy3aWizCDzaSM2DBZjogaAm1CiXshWHXf7oRc2Mbbw3iawZguRKBoXpHibMBRLH1KAWTrMPtL26LZcRHqaB",
  "key26": "2hnwwZwLMdiHRxv8uqCfpKsqa2KZzFBHGxcbgeUqrt7Q1hug7VFeq9hgW4v2f6d9PF6EWpxek1zm9wqndELtB6g7",
  "key27": "VipW4abkAXcvwcSHVmYAWdx2V5UPd7sbWzC2DAHk1Bv1CAzTrAWannFF3zcAeAVwJGF33xKLjuutZgY7mMpjTX7",
  "key28": "48TWvJpQppQxyCNx843V5bircMVpETafAuZw4sntXLisMisLpbMNy4Qk8MXZCCUGVNWAPEgwaKw2oEwabiMvUM1p"
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
