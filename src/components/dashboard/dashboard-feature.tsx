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
    "tSf12jtFshF4SjgXqQT2zSeNEbL5qNV8dJxfzXhb56DTQGF4YXCbQKSgsnZiZZjfwfBVdJZ3CZCzN927FLYwxm6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "xRxGLWjpMRVcRnL64MKHzc2NcNi2AtC7UXzy2ogXqbGnc5kS4Pws7J34U9iqFokaAaNp79GR1sg5T8pRVFTs6kQ",
  "key1": "cgmkx6jeJQ44rN8Wcrnv2kc1Sq41bXb41YpTChzLb1FfPNuo6ceZFmTftgsP4BW62psJAYLYZf7jGD69Pu5qu3f",
  "key2": "21qSQjtosX2bR255o7o1Z5yvzPRYrzuXSU4bXLatfYW866gSBc6Uai1YZqBLNWitvdPcooCAzBpZWG96dmKyPeik",
  "key3": "48DKU1KP31hzqwcphDmPdfmenfCWwhvYwupBU5x5ee8BNPiL2cFAbaWeFXsjPfFRtQ4RoucK37G6tdE13KMA8SWT",
  "key4": "31pmqtrhjdHkdnworzv5tBerVaJuMTMgrW9gtzUGV2hjpUwNjaAMvWsMfsFsnjReUrybbDhuhLzCMptaFu1othjp",
  "key5": "Vc513KC2q8EnTMXfFwKJPr12ayn4tXDHp8EGq4GSmkdAfvKp86Vbz9jVLatSrXpM9RrLVM3jGqFvDccRzPiyHTv",
  "key6": "3Y6qbD4dv36XCV5nehSMtWG9MDUd63b5xh3EWgcg99CUsHKCjB19jtqNaLe5zYPnvidQMqhdWNvKM2dpmsdEKp98",
  "key7": "3YC4Eo31ZeMottG8mQE8pKPWddBuR13Dv4ofSU6B3d72BMEo4dFTwdX3u6aAThkLzXDtgop63AGFe1dfEba9dNbv",
  "key8": "8SvwvFf6foX6hJdRREnmitXg38Y3xMUewcYqfLomSwMS6uPGnDRQDiYnpxycTxzdMkT3KZwCnGTZXEKZ2njLLAt",
  "key9": "5PWtHknmBqsbsHkbuiEvbaowUGmS5MxjSU6oYRyRJ3BzMjWsBLGwpxQHZW5CtN89AQzsiQLqFCo4Jmtt2KvRBfwG",
  "key10": "56agSRYRy5yrwwZUSVsM32ATidfw8PE28J9TNFhRfYc9yfWgoSqGSLhjaXa75p6UhopeAemJ8xgp1vJPbW8gmPdb",
  "key11": "433X3W2xBQk6iQrJPe4qdmeWtJjZzBKRJZ6QynpU1ExCPpGUnxuuWZnCgHdwm9e7WvUmXxz3VRYMnpsu2WFsWsQp",
  "key12": "5RFXyELMuYsaL164nmCLJAFZVyVUvveFvTKYiJBYyHKRg6A6yULB5H7xnwo5a2fs3ESeYoGscvj1ASR9CJzUTrAd",
  "key13": "3tfXk4cRdGtcG9ycqmS8knR71cPrzmu8KBtTj5EGFHZvgukAp2ZSgwJuNb5iAazvT5DFiAUE4WYeTXmcq3ofejqS",
  "key14": "3CdQEHMwdLf1UdouSdUSo77S8agDGytcfhr3tqCfmKk7EogWB5V1xSoEELkwDQvv7kYKaFkowc8NMK8Mr5m27Vrp",
  "key15": "3chQfb2VENUeYJwkkqcRiJM59Uv3Bt7j5pG7BNbPcjmUAshru2jGAJYVEcBEq3gYKu5QXuPCuAHo7ryorp7iVrmr",
  "key16": "3mBGoAVif4Jz2PMSKd2mAf1Dco7UZmVAJ6zf5zvG48M4LMhjJzAA6cjTDtvpU4rh8X1yDhB2N7JumNC93nx4mBPC",
  "key17": "i6qhkhw9ewRrh5kyKkpQR77qumADoHvPdHXkDrBvRCVBXU2DZZSKWJQiaXUMZVuHgJ3YdYGRRDe8ZazqFsRpamA",
  "key18": "Rr9cPmcr3ZPrURXzFs1Pv9NujiUYTJGoDqiMvGuRPmBZtZshmWtu8AvvHqjLfoQBW2SKDcKPKnxbV13B99z6Euy",
  "key19": "wofpo9Q9gvvTqhHWfLcWmMyMdba7HYBTHyYVRoAUzkEwMG9nKaLYj94VvXnmXqQcJknKupi1fJy8Au6YVxCo4PC",
  "key20": "619pHkjZsbQBcfGapZZjZLBxCa6LYKbgFacZkhA2TNNRd9aU7nqjoRM2jSMBdHVgUhCsFzT9Lr28qispvYUy4ZR6",
  "key21": "4ShosAZgE7VV8vavczKiX17SJnxCFdciZKYTUYG6gZj5y43imNsbecPnocAzKVD1T7aoSyB5cGoXFRKdgtPY19Gt",
  "key22": "5SYh7bhWz3wdr8e9dq2rdccqLAFmDBKN9Ndx5Cc9gchNpnoNxN7V7GsKcu1s1vYEoccoxbkWhSgVZBG16AEwhqRx",
  "key23": "35TvGq27bhebQXfVPkCRMA7BfYjjXJxymz4SoGKTit2aEY27yNQ9LQSdtrGPXefUMhmY3PokXEMPd7GKMvWh3Dm2",
  "key24": "4inXEkNgTyCamBqoDohtGDPbZsvqMA7d4mvoCnntBrFMq2h7EjS2XPxezMfLk5GZXzuBWoMqVzU1RxGQEt2QzHGk",
  "key25": "4Gar44yyWezrmZHGNX2NNxZNvW9r9bGQ96TaM9iaDSPkYpCVw7PGfzehDQmasJjb8mYuXh6skKQPgVHK7UUCBBFn",
  "key26": "32w847FTVdnuEnSdHnxGEBEAZQgjPZ5MjNeF8WqDaiUjN2wz6LXtccfWLi3Pg9XneGJ7cKG6YdFGyH3bh2JVkQeT",
  "key27": "4bq5dEfy7BrMCCTLLd57Q3mUb3iEJiWPSsg3JLYUSNsSZaHadcU5AHhBBjfbrq4Hm8PxyooCfTYTN8hpQBJBMwze",
  "key28": "2Rkcv5iqB8HT6m6LEPY9vnKPiBdGgYJpRMsxqBdbr8CWGKr5QKxB8CyN1kTA39brXhnD859ppYqtkGnVUfVAieGq"
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
