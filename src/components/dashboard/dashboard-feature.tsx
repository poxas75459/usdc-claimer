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
    "NqbVdmB8KvGzzTLe4aQ3YNncDu6gq21RmPSsA5RxHo41pAv4mZuu2kvWoNmN6VLWdcSKpNTq5xGQpjxLZHWRE7v"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5St2sXprqqi1hV7jQPqghr8T9V9GRLejk4mLgaLXoM3s6osr49QCWYdtYA2iyQJc45gK2nDQuN4ZX1TjbsiHaq8p",
  "key1": "41KBVBm8HtsNXTWknZspqGJRHz8cPWPTVSypqp7ADwcXL7JDCxY1wNYTaYftbnbJEQDgL6JK5XQknKSmjoopNsex",
  "key2": "66vdG35SEo8rU2xLW38ehZrsYjKbj56tTBHiUHsxkxNnZAU6cahAHZL2vu8FpKL9pwJXWSSc8MeNh9sKvD8Pt58p",
  "key3": "2hz5MNyGeB5KrjnBX5LuoNcQMGdkzRVwCB9MwDaEbQLRvRNA4LgYcq9tfvs8AqG9KYwn9CsZ9k9hvJnww5ZQfXwk",
  "key4": "299WuCnUhVccBLaRyKCqFLa37fDJrx8VPNxCSmRAStbQmjDKzcteFKiufGzvqW8gxZfsDcJWSaRbwgNze5NkQAQz",
  "key5": "4CGCyt6Wyz98bcG1WY7Q51xnHgLb1XyffzsWvMmQfsmM7ZUs4tQQFNYPW6Rix47JyafqSzb9fmTwNwqs5aiga5BQ",
  "key6": "3iXH59oSiswKEFz5TSv1xLpqsYsNn8xxNEZaRbCLg3gRRLyGSvL7f6G7c5xdkLrDvu38QG3ozPoD5DviRYkWeo4J",
  "key7": "4k4pd3ZfVPFyR3x2GBADVJ4a4G35U2Gcp6Haq95jRpmr8RiHJrxe8yZXe5EM9cgwEDyBf1JHMCgbddH29ApweY6y",
  "key8": "gjHVhFKGskWc46EPvhGrz3mLFTLDy9zCJpiTdNAN3JxqeDuxnY3XZ653eUg2e3ckj2PgmsqiLGanwa8RD5JNWMu",
  "key9": "3nUMq84CzKxxsh9XcGHAvx2KPebhKTh1fnTCqungbh4H1tTihgVeget76vDYz3QzV2mNaxZBRBL5RxkaL8CtP8yY",
  "key10": "3Pjg79hrFHCN9mNEDdUYAqLVUR81C3b3yCsDXSZh25qJQCa2Q2av8z7u5WEwXLLsrEYytxaRePtgeKecbw1uuAo7",
  "key11": "3u1ugrMsejVkCkveLhwkRonesW86eNb3ezs5h1hZ98nVEm4huYsAXBHSMSPEJ99HN37FRGk6JLfxD5hZumWmchbP",
  "key12": "42vYkDsdQd2QQAtEH231VYuB8252Vm5EngxqEgymg2EDUnhR4Y8wshwFvSpkHJpqPrxPQUH7MjaCN3pfWEg6mhx8",
  "key13": "5sczg6besyuC8KhJmZFVqn7Ak8V77LvCcNABPnwajRgBFJV3VMoBuXz5FoRP9ZZQmLNKY2wFpobgCPr3skRwC9XX",
  "key14": "43iUpaPi4F218wADatAcfrLP99Fvhu3AVtFBVyUsfEH6V3HmrfA2n9aXUgkh8DeirHLNVzRbiaf6ia1NZX1R66Lf",
  "key15": "28uwrLLcX3Z2cRvAUe7hmsTB7b66fGVQw6etnyUDQsi7sjSbvLUchvxZTag1sDK2yBbb4Kx2JJhJ5GvJSFALRYqd",
  "key16": "4V236aSwUzwmS4C5gk6Go5JhUg1qZeaDyrQwiHfdXtDDo2gHXrdAAPcuFq8jkXaUgpCfJ4NMWccVmUdLwySAR36w",
  "key17": "4VZmgwXeSwjmtru3o7wqe9njWfntv4URp1em8YpU8RucSk7qrFAsPrBsRx5e3xSxqV2qJBMdD94kMnpBDSK5Y4vr",
  "key18": "ye6rgD5Hp2gk2NP5wMGpEmYarpXjfNMRACsxpAp4vogoHoH1KPAoKBUyN5VUZbUsZqmfKfCSF1v5FWtbuKC6T6g",
  "key19": "37feVGcJC73v2eeEc6MyLy8KfmsvpkNEGbamWKKepFc77QTehwytsFMim1Jx9vA6Tt5duXkG5EudtsG2tjZG5nQ9",
  "key20": "3TbmBRnVYNQBhqoPS8Uk2G7uorCJfvsmf7jREnENbiFTM9uEEM3LQjGAaoFaupTXnBfmfaanKvYiUJPPZjkcYufV",
  "key21": "4PD3q6sk7AqM4UWH8CMuNttg6zq9kqgp4fzxG5LVzEEH2VBV5APYmJHhxJxcYNSQYtmQTDTFZwzAbG154Womy2bb",
  "key22": "3te36mnosNF4kDn2vw7A3BfaiLcJdMmP2D3qwUdLuqtwsRhw2xxXpcM1QXx2trCKkqpBGv7j7nwgRaCx7PYnjhyc",
  "key23": "4iLMtgL7sjimtCW5vy1YyPd2iD7ieydAVYTiaB62bN5mfwCHchEs5UeWRKG8s6Nn1S7meLWiUcGUpooLkbrJ4rgw",
  "key24": "4yVXvu5z1FrEBzCzeWKGx1qrCJxqkBpzuoAYHwhVnMTFKcUCR8WXfrJKEvtvtLqBvviiMsTPksX4gTPBjz6k8dyK",
  "key25": "2D7HxnwXL37KXDkamXeCUAPJw9teffPof4y46fTGby1GydtVo74eZDrSbPR6BJfco2M1WbwPPrj5jqXexFsL34VN",
  "key26": "3sCgTi78UmF8YRNxy4Xj7nKPU6BzKDTFjNz1Az5HBeV9G2xTRsNFKHW8KssDon4KA4pf86W5FuaXMpNx13FLMk9L",
  "key27": "2ieXYa6icqw4iUWFxBHUgccFECYRUzH8EB4Cz4UZPi9qeUzqUiD9B6oMbPBBzedmobvpz9fJu8qFdD86fzyPzfHo",
  "key28": "TLAShTmCFoUWB3xA9B89hyH4GeY4q8UXZU8NaacULcAHw3gad7LaQx2bvNQ7fqKo1QfRZBz5SM7QeFyV8QpagoZ",
  "key29": "5FxiFZkigUZpqDRkvwHTrvQzrY19Yv3AHCQpr5tfM3iNEvpY6SW8hc78Neq2EpJzzX7bTBtRVAcpBqstjMptr7bb"
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
