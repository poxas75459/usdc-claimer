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
    "2kLkiriCDX4L6sAc2Tgx1E39cw51t8GYevaDcHXdjwFwayTeV2bwYhbgF8AheWoih4W2wJUmUtSFXZgP8SgdvbKu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5VvJtmH6u93Wa41qs5R6GNYmqcM85pJy9NW4zTLFHQm6fR2yNxoHdEStFwFse9cYXn47MvLbndt8RsDtggrrPuFv",
  "key1": "4oyxDGPRpd8BdLUQXnD3sN8oSKcjcp33HnvrP9x25L1XbeJNdGtTap88p7PgYA6sj4isrbCgNuaNjP7brYs3xzkV",
  "key2": "2LGy4Kng8vif8b5psrtMEGU5QaqX8YJFDs4WreNeV7o9kW1U9KS3ui8fiXWfjASig72WUBDe72VzWgDoKsczsbCq",
  "key3": "5Bg79e2f4fyNkeTKxXdbzq9iNyySyHRXpsDhRmwxMhPyw32rMAUkomvxMy2opME8ELNpdVYncRiJbqDBSgq3xf2c",
  "key4": "3Lg1TPijrPuN4Nanr3FMMvThwbQTZ7LqcjqeWzHWsmQLavK95GKPAQWEa1HwnYwcxLQWxkcXojyto8xnHTsjRLQt",
  "key5": "2Y2j2wMj87jBru9VCdtRXSG5EXjQxuiNAQwGJFPFtVdjHBLn9YRVMJMVTiEBLPuu1xqhWko9g2weKSy4tziFq9vq",
  "key6": "wzNs9iEQZ77MhWUPcA9Qz4pznTB5vH3MsCZpbujLqWvGcWX5PzfNU6Zd1Z2tAPDrMtJg1BFveoi47DYAgq7cjMz",
  "key7": "2ifpdxVm56D2vDqbQRjVPfJfYZFv6BZzMcPsNtPemQMHyqyMerzzVfxoEFzNzc9ikGfWgUns5RVNwuvy3kFoRCFY",
  "key8": "24tFF7d7rBGxt2P8wyYrSzWwiuyb2TFiG6WXvtZYp6ThTW2ficHHmcJ5o1u47gno1QscqgE5eZU6dv11YekJTtQ9",
  "key9": "5ky3ZaHS2V4tTcUmTqd6adjc7vk92pMdkbdmV68E6nVS4yv3vsCtbpCsEQfy5ufeCMvFHp66ndHxUTqn6JLecPca",
  "key10": "2eszTnsYLuqkdXiVfLgRBg6gaMtomtjacMDdqxwf8QdVd1qa1P18zu6BfLQpsmh5DS17r36GuR3cX6NSJSWVXm16",
  "key11": "5qh4sZD53FjJ5HD7o3nesNBLJSwL8cdCWeY2CYbMmYWMSk1AigyWFY5Mv8pC6Qv41xG39RTbu6MFejVh3JYrcngG",
  "key12": "5GnjdhRW2EBc9M3kKJyLEnLHxttPTbyMTLwyCkMkYze5KB6wMixtkbXW2RAhBhQNXpcBigjezMs4BsAg6cr4JHqS",
  "key13": "3aJn2qckiAkHAzs6PdP4WuegMy2uVLAnREeC1UXNaaVKzJAsetaBHTeNemeDWuJufxrwoWMoUyRbKcEEvBZbn6Fd",
  "key14": "2LTP5VT5A9zrhCFwyVXNQu69HB4mZ59WmEdnSjMAwBNwxxMGnhB1cGJmfwon3GHGRhAcc1k8XiYDSkYMfBACQ6aa",
  "key15": "2LZKamgUEdKVEcqE1u9VmfKXHpcAPp4d5BTNuFdoMUqMmWqWcn5CDiX3W23ovc6dr1MTTzBrzXzHvnYe6X4ktLyR",
  "key16": "5mpg95LJyTg2DxHVTZ3RQjmbrsPQphhw4a6CUdrqMksRaWh4L9FTqfW8wStbK9zpjKfnSuHDKUZ8guaTZB8zagNj",
  "key17": "2MvVxgSpitkqXeuJhyLys3RfVk3VYUnXY2mZgR2mGqrmDgr1u1B6QR2qhxn4bd2bQgfCzPrSja8nsYyySbGdfKvy",
  "key18": "WjVut5NKHhkko92y9wXHDTuTPs6kE9fnydFETxce6oRqUDr91C1YyrNspAskvsfRUYCwyEEzHkqsgiA7HNSZvA5",
  "key19": "3SKUJfZVW8JzdarGwAaMizQkPrdJQJtY57jQHah9WZafpEmZDWShFY8PTy4NKYTdJNa3qtpccNhGSUJ9P4kpDP4u",
  "key20": "2euo6AyQrtfTbKouzXUpU2Zk7JEbNLDLbXEBYwGdcoXYkNGsUwEDdrNEzaYrahTPgnv2WeuWadgAYnaWxEfSdejG",
  "key21": "fPf92T7v7d5aK7AgrmADrLKoaqdKpvfkvKGLpAKaoQptpiQhgBTdaq6BUxr7Yjcs2o3i8N9z9GffVrs7orMqt22",
  "key22": "3VTcRsAcqwHdhz4qHNuF6VrBFtMLdgv7imS8o4xc69w7mPHS7QNQq22wPKeHuXwSzyCWNiMatPrVN2jVYfKuhBNn",
  "key23": "1DSPBAH4fYpFFif2cdr1NMs9P3cRDWVmyRArLjdKpnc35vkimeDWUTpYJyR3Mar7A9dny9ZBNUwG98qjx1iW28R",
  "key24": "3GGpMks2xb1MSvvzYiSBnBGMy2LHnMZ4ww7YQjVbBaqrL7xcc758Q4BZSdXur6cNz4JCU9P5sU81iAZgHnPkWQei",
  "key25": "5RRjsxk9SefdGsGYYQRzEFiJJ4fCiYoLg2UnCf8AyDdDSCfCosZMXqqsZVapCWBGGrfVpmMuRArb4uGxw1T54rR6",
  "key26": "2J9gNVhYnSXVfiRKqgQMYhQDnbtCq4jX4r1rdVR7MnzENPrUVAabxMaMtwixCPsViVBegrkzjonnoaJbNUMur32d",
  "key27": "WsLw1msCBP4ZGEodLhgytqABkCMgfHLws2ZHvPTer5WgZcndoM582gWKDpiVvQqoouvwrmCcCB6RkUUfZ1iaAf3",
  "key28": "4t5mbwuHeZU9RZYAmQjVHrxdqBqjJrRe5XG5Kzjk6NKvpCEzg9S9b6t25ZQyq9tdRjo7t7HR2S1FCQe1uVdacU5Q",
  "key29": "51Xwg8HsRu1M8XLDEuaJ3iePoAjxPN9HcERREUHF6odhqphxeam2HJuKFHjNSn7tgBboPfTH2a4kHx7M9zBimZod",
  "key30": "4iJsvfft4bVx7YxLLyhdgLyLDzgMSiaB9JKviPmUfetjrQTstE9cD89KfMjVzSVsMZcqPB4BJbftqR2wf2TidLb6"
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
