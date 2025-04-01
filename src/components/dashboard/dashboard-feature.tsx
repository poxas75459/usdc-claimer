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
    "3Lrfbdv53XbD1utvAUs5cqxfuTjXcDPSvUjidmSFCpTm1XJWde8PnXVxSYufjvB5sSfYGgHa2fYzMpXBG65jjrFg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4w3idXeiviZTvDaJ9omGagtudYQZjxYgqijMRD6rhTRUiaiZmYh7CGkrDEVL5HYfjk4YrVGN2GfbfvPiUfL5UGw6",
  "key1": "2CDF5ZdsE3N3ZVK8EBsWUx4DkKgezHXrJ9sM9ZhDYMNTxWsSk9iRP73wLd7KjeVenuid3DSSn95MFeCXpcu2Yz6j",
  "key2": "65kJy7vi17o8rzu4vwbdpANRnbcGZB8WKdP5dpzsPUPFbuMvXbmRGPJjjh6nz5GqZvj6dumptXYbqBC9pYqaVfqK",
  "key3": "5PXJ9pWgUSKD5NHapzvpGw1VKfQhLAfFaMWQQgRqrfLXWHBp3uApc3yiem4ZHceKuqJ4422kRQ7WC4t6eLj9X4sE",
  "key4": "4uCqy8bUMsXfwpApYBTmxKcD1BSJr5Utv1Y9YCxjD4TZtPnDhgf4Y6wcR9eqYJYpotYc3exjr8jTjQ9GFxmcpn34",
  "key5": "nzkaCx9cuaULYq9QM2Xvhqg2xsQVNFTfWf32cGPXogEWFJPvtY3jdmX94NFi9m1BvaawmC5ue2Ba2oJ4wt4Dc9h",
  "key6": "2KyYeM7s2PuGe6MCE4JER4uj49JUV6aKcBSDNgT8Cvwzt8VoSwtSCNL4h8XNstD9Bfy44xdp3U2uFvJKYN51zJrP",
  "key7": "66BszF5unV3xMzp6w3VzayXjE1wXEkqaXv2woBivgSiRTLno8sCcLbv9MYYrTpyqPBb21yyepNr6jwGtZMKjaxa6",
  "key8": "Ws6RTxgTBN6KSrgrKbqrVizVAFfmxu73GvRG4oYt2xPA8BNoRc6K9k2z6iRydTGKpWJTH7HYWCeJDnywmkNme3S",
  "key9": "2ofv3Y5sRanLrQBvvjmeBV2rJNB9wUZaCHhN55mabCBrWCUkKBLPNQ6z2QN4dqfd8tJinSk62LqjBiL39ZkVAs1v",
  "key10": "41rFL5fwVKwAhxFpzW5F9cpTFbJKnuQDXh3M9aSV47cw3nZpR4WLrxU27BdWtyMsTvJ4WTasYQNudfgsoTrbGpt9",
  "key11": "qX81Yh67LhYuCGtbMzwih1RKL37tsHgoEtkuhZGGkwFRF4zAeJdTViyA1SdKtvyumJrSYVuHhQ9BHB8sv9YpG5b",
  "key12": "4m6xAgaXr4fyeVGS1vpvJDPmXUPyxv4q1mtSeHGXYUutPZkBz9aDaDmyxjGQPP2JevoRQvNkisjvSt27AXpKriAv",
  "key13": "3m6x5RA33wYe5eyn1hJWT1iQQtsEFHHnJt4QAT3sy8GAYdn4VGfiNAjRkRjywHwwXpWFnWJC39A1QsVi67ayKe4Q",
  "key14": "bP2wU3EpF9fKzW83J6m3ugfAmikiPC7gKSrE8qpCdNK3QAh658DGg5RLA5RRyu9hSZ3N9PaLbDyVEJwcY2N5JVB",
  "key15": "2Pg6bEWy8vJRWCWT7uR7rZi2PogVMhm9ocJEtwE8NoudpmERTxTCT1BZj3tDVMHdf8NQW9Rv6u3Bb6EYfGhgucbS",
  "key16": "5HB7BVC86ds1uUgT3AnPTEzKkjvAstmfG6noRmZSVDwE7QQQh5ZTNvU7VZSM27FVpdb4swVmyKjQ33gAg4aZhZVR",
  "key17": "ufiTEVuzv61baiZV81KE6hAG3XKQL1QTg5vV2cNzeYsopEtx8AUZFN7V56D5QcWVxCMxKZtYtcbjTyyi72WZhZM",
  "key18": "5Hxp91SV8zp16ShX3KRxnSoAagDXPMHM7D13t7gbGBRjq3V63YuHauHjMoqF3fmTgxyaa6bYDaM18XQFVL7BQyq2",
  "key19": "xMkTHN2QY96JYNkwAHF4e5151vcmCEwuw3kBLwH3oWFDhXJLX5bqic4vPDzsmZCL3TDSQfZ7ZMUQwdBAwsqSsaJ",
  "key20": "26LjCk6r3yQ6FFaLa1VfVGUyK5K1rKNuyYAaVpGkRJPz4usYQEpqSQ9m8Xf4HGHhYpxRwm5ApZJ7sSYrcH9nm96G",
  "key21": "eU1htrNiyEBJsETuFirUo4wcXF7sYrrZN81mBmU8DN8U6ykq6UDtUYi6ndMFunrGWqPoKRxz8ZAHuCAykmWXhUQ",
  "key22": "45rqviUAkvjCYkGTVU6s6PDgA8ux7Anrbn2Y5rHmY835VddK1V63zL83bKz1RfPUcPKG5LVdAwQ2ZKVUuvtZmjhq",
  "key23": "7PrATAXXQmSxNcZVb3AQDpQuXasLr7PDCf8icCnhDrhdMcTxDqRrMzR6ZQRiLe1UKf1HZc6vYMe1V92YMoyYbph",
  "key24": "3MdL2vzthmwryrQ8fDvHvZ9KfzbnNwxsRy2BnC7NtEcJgHLgdiar2iiFBE2FFes3RLfHBAkLmBgC43X3SajXTtKb",
  "key25": "2LMy39A69N7hneXCteANLLRo85qL84AfwieHQRZGqVzrLqjsmR7M6oH1sE2M48Vuo3UM3AfbC8UXNMtFjq2FpWV2",
  "key26": "2DuZnJhQAYJbwM3XkML8ft4oVCNEvMy3mZSaQo1fYccqxig1iAQjBsvkWbq3UrrENBDQb7TV7heH3xAa9eb2rYKp",
  "key27": "2oLkiNDSVanoLjW5CegU8iaP8z9SijrboUi3CmRAVDqa6DqXi3mN8BW9sYxmwvvLhL2Ery8LuJ78ckoqzg3QNNcy",
  "key28": "5etfXmdJgpSX1J2iS2gasCtnbQ8sCYj5ds7A5eVLH2cTvMijGNCjmYy6Xo6R9p6UmzeMgpZ8WfvmcmamPcxuNoJz",
  "key29": "5XvgfmmMbPomkM6zkfDJaftrnfor2cXdzBZ92PTepEANM38HPZN8DWGqiGxHPJDLS63AYVR4ZvkzQy6F42zKhgu3",
  "key30": "5NJxuWhA37MJjoQPwqacW5w21GSQq7bixugknpjRB9cTC1o8dDyqqfmC1GhDrFSu9q41guT2DDqRr3gt6mGeATme",
  "key31": "YVBYZGiQ6Bb2MWeZ4gekLwK4uQWTucM9vDXfYQDtvyZ7DYSCZsnWPYxBi3i2u9gN7Fnsb5TnL5TXRh8p58FGrtv",
  "key32": "3SwfBP1u65ZLfSv1Vyjbt6zCurrk7Sd1vGdReczaMeRwYdZFgwV3ZD9f3b6YLuuWng4sATs4qZVDF4PnSH84HzwT",
  "key33": "3DfTM1W1xvXxPntU3eYWPLCV86mzt9cEuutju2PxEUitXWyXywZrs6Wwr44XHt9QTFuM11A2SsvKDvNskTnPES89",
  "key34": "5sW9D3QBDrucxbX5K6QMJdS1ZAUt8Tt697usnrfPqXPLQxu2Dvm6HN8ncVXvQutAakopvkzD2PcvXEyjybmCiwPj",
  "key35": "WxYg3RFN43nmU9YwKjxctLupQ4dARkA3ibd5kEU9pq4Tkzj8jjKYBQzoLhEUNu1jETwqCDGZUVaefrVRcF9eA8v",
  "key36": "3nKmCT1s6vJoRVysHtFr4JnVHtkJ7eR1EZ89FuBkHK1MAqgNSi1r4tJwM2YvHCh526XX6F86b8jbeW8yrWK6kJez",
  "key37": "E6YkaLH9Zys2ZXf7xu6xiuMeXcXec8H6rSMPjQ6oKuHZxUmEYS8i8RxXyMickJYKVx3EDVgqQ3j9fsuVLJ2V2qJ",
  "key38": "3turvEjaRpjge89Zz7tdMCKg2wAUGzBQnrjWxG6PXcnxukogdFVrQn4c1nf4G933nLiUHN2siwr98nryzAGg67we",
  "key39": "4pHtfpWQv5eddoVW4QjUhJdiJbtZS9HNQeyrnSGrFs6TseYDDvgEgJ9d6fpTNpbopPmBo1p6Lmuf2LsToTfJZtHp",
  "key40": "YByBhhbRyRRw7x8t7ioupnKSAzQSCbVSVuiQsMou6s867EFEuhLoJqmyCTa7e75TQa75sUYjV564xvAs5GR69dM",
  "key41": "JxfiRHiP8cPERFSRfNjbQWfoSQ8tx69mjUmz1rxyNU5k9P7mGKEMypbyMfdmvYhzASZqBuvQnRD8qHbPaeWDjPq",
  "key42": "5dYndzuzQpoAgkYVAnJkiYrhavsFY9ZKJNb6Lt4DTKUfYy4sgmHA6gdiKTUYiHgqqvxjmTMePbkp5H33AUqm8UeC",
  "key43": "3Ta12e9D14DdP7ZQH55XxRdD5XfMbk65PUqq3SxLQPPD5BgKHcUk8mrLvh6azJtUJhgMawQsGdvBWswLWuqiRhV4",
  "key44": "3jMRR2HHDEEUKvEH4iPnGqpk7kFZ6tby4kwfYTZ1rJ9RzX2YDX78yRkCk9Cg466gfuituyNxBNr5JPvFqo9c9GtS",
  "key45": "4Q5iVxN5A7zyTvRiFRwWKvetkPTTyTSwpZHd9AuvpzHUYaKy1BJSL4qJtSVpQpNMAene8FNq3RbVxFy9WjXucjtc",
  "key46": "47kH3iNfr4vCKwrc3BSUjna7rFZMq1SSV2ijsXhrCN5qmy48mvWeZRvXBuXQ8juWh8eotuW8mTD3KArLpJsesYoK",
  "key47": "58FvMRZJ71hiHXzJYoPC1FZLHwrCMReaC5h6sY9MCbDNtzeLBGef4oVSKSAxvq9t2ERHr2gw9VraANETsDXfBcwu",
  "key48": "4wtxQPTXZjRFhNR2TbAi6vuB2b7PJzM9JBWt9ByjCKMzJALvhRZr76qQps9bKKHJNSj3FLwz7K9yneYXoCVE2D6u"
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
