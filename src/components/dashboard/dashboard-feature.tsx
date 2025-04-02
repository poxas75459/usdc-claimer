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
    "2ZGwjyrs8Fo9HwmrWoeFQQzzRq5ysFESsSvLTLEYyzFDcjRw34HLKdBGY2gTEBYBhAHMdXTsL6LUeJdiTT6nsmBB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3S8PYK9CF55W9bWRJS5B3pQHFx1c6cyRKX8fqKXUQn6iUmkMR2Y6wCxukF7VCEsQL6fz7k9vxW4md427YDYoLYhW",
  "key1": "5istpGVoLLC7nfsudxWoRQ65qHkYPnNz5kznDw46tQZqqduH2c9xzGSQYqRZ82JtjWo3FqjA6pRmPGX6smhTsL9Q",
  "key2": "4mMB5ZP9XeWLGtqkgqQcncAVXK3MVAMHE7cphcGxinHYboRzSKBBsoWBefCjfS6CHo9iEDN2YbC9HQaJ8vNxFZxJ",
  "key3": "3869Cyq1godztQWxgKY9Lhe2RLHFe18xk5VESxHCstejrABkohetmrq1io6Fx4zErQEpn94y1zpLQ1MHgSsBDowx",
  "key4": "5afeb9bsNphqkbgGky23PxFwTvK5Byys9U16TtDXQuN4sBV1boxodp4avwv9eYfnucyM6Ynub3AwBdHQAZuuZZCf",
  "key5": "5XFJ8nJTKj97Etkqirweq6SEoupfSLB4ZFt7MRSByH2j6N8bbQCy6btNK55zPYRZPXm4vFnVyhbPixRrNRpcaEAr",
  "key6": "2ANj5QeUhN4KKBmBkt6HferTp7fkkdnhizJRp7i6kfGcdu8rvaacGUkaafjiBtcuJ53hsAq4n9377fDrTyQaCc9T",
  "key7": "5ivw3fiCw6JQtKqZUfhfgdL55mAG2kQZQs631CtQMJeuYoPQQUewJukQu8eBv6dyR7PZS3rDKn9jATdLzmHxAy1W",
  "key8": "vYk23a2pt5RBbcfrstpmq8U8jcCcEK2jQu1D6KVUiRYNiEuPU6JFhhbbWtaYxd5hU9qpY66ueCFJTn82MuswkPs",
  "key9": "2o6VW8V7uVZKWvwzJTbwQam1RLMHLsTKq1zVGLbN46a4Sbeu5d6g4PSHNVaSeeUvFRTFGPG69MDUAptEtN7Z1k4J",
  "key10": "VZNzuXnb735WGDhy3DM79p12muTiqyn7eNsVkw9u4YSAp2bHDeLWoc5s4FJvELQYeFDnAihPLRFfF1ypzBArKL7",
  "key11": "2m5XbMCBnUx5B9i9h189qoqmXmy1sDSvdoMihWdbpMFAUQWbHXj76w27adCEVSTuXKLfUjVBMKAmATgGtQEcLjA8",
  "key12": "5scucn4vkSLroVQbpAWri5xWJs7eF1jeQw9ZMwJooVmdq9mqpAj9T9wGkqFSDE495Tu1tZ4KckaqZuT3VK9s9zUz",
  "key13": "4QRiKoWHtWjczWK4QFvzyJwTLip2kvYVtG3X7jdP9HYq77LA7CosQGFboCJ7xgDcQThzUTGvjUBYAYbGZDx7HNU6",
  "key14": "2BBNGVaJ8hCHgcfCd5husdHgWdGcJJ2Z7vRbwRrceDHQmrd16PvmhNuBace6bQUUahti4hy7MvqpzuSfQZXSiXQT",
  "key15": "2v4hqADkpy3Zz2DjJ6SKjy3JbAr5DXCCNzNfUxSKC43k2dJsWWJz2DQVFxqakpEoHKk1WqFVE76aNvY8qfJCeoGZ",
  "key16": "3CexPwMdQjRhTCa8TNcidphThBXkPdPHhZQTKFcCtLxJPm85r6uzUXL233pkTR7TGw4mRaBJFNMm2zp7vnS6JDva",
  "key17": "285ubZCMk7jRGaiQwmYeGg5aL2umNdrHYoX9b16YjAgH1T6VAtk1zMJAMRmcBgaVda5dnsYUY9DeB2nu4nFfJh8n",
  "key18": "5ziaJmmKJZPmWyuyDELhCa2FkQ8cr7eq7Kn5wgUbk3hzMS2py8tyPJLztLWc3LAA5mu7kW42wpkzPAr8v5MhtpXu",
  "key19": "muWkcJaMwJuRSsUoUXpCggveB3CxmjZFMtt1V1meMBUeRpvA3Ce5Wvf6SV4gptZN8GsTj6ZJodhrTmLwLwCA4kq",
  "key20": "mUV8yn7bmVUU1Z9oSqk4Xs88X4yunEDQrTFEFnadrHHdpa5xKhWFSSmAXR5GWmfwtw6rb6V6DtrFumhjRSUnGKN",
  "key21": "4AmgDa1oeEBZKyAtxKLT2afP7pEwtdHZoapBJQqJjxNXSCwAFK7nGGuyaNUw8Zn15N2gGYBVffUdrXy8bq24bgAX",
  "key22": "51HaDdSu9vBTsEyfUdq7ziD8TT7cTcybFYnnBgW5LpzzQWUFvGjQGXf3oRgRXfhQd3A2RGMXNaFteeEH6Uze958Z",
  "key23": "3xtUZaCy7NjmkmDTtKJmvoysvkeYvzj9r1TRYhaY8o89DnXf4bhjL9NTuzQqeqjopddDWAk4RqeMd3HoUUuNdQFj",
  "key24": "LYySp4wk31fxNxyvefbW9xCKkFKaahk8NdX6irgs3zsFQZF8RgEFWk8XQNTeLXndgBhq1D5jnfmve62UB6MWVJq",
  "key25": "5u9kSfS9H38dpHV91VA5RNZgiU78KpQiX1KaLLqePZ3MyAJi3sHS9tJ2nMvCJC26MynGMQ79YUcEmiYJkkFhv8w6",
  "key26": "2g55jEhYLVfeMtsfykexNa9hgW246z5toDsHEhhrgsMM7JNG6hAutHrvXFzvxEYfk4yXoH4HDXSi8WyxCgXMkkPJ",
  "key27": "4Syv6xLz1YKDnDNVnq3WbLDLkMVqfxVfN5895St2Gnm73Q4fyFhi2wmGwH722qkeieafbbEFkLg4QMSMyjX1xZnN",
  "key28": "4Cn3CzNFHMbJr6T53CZbiAeEx7wB2CVKLhtSNG4mxw3TPnJXzLJV1k31RPx4CmAwWdDf2gyp2GudVGMcWwBPTEh2",
  "key29": "5JSsJ5BTbTnqrhabPWZLeSRavCGLgH5L5jV8pbUn3XerZNkD47Q4UHYar13Dz3ZWgqBsGJsdWsZogbWzeRdvGKea",
  "key30": "5eEy37Bh6N4dQfjRazdYQ8Q1J7DKjGv4ZWkoFQLYDeZfnpLBNQBN3sRgm9eyfazijp6t3aRsTRGgDZruc5WE2UER",
  "key31": "4T97YvxK1WAUiJo56TitEtzR6nuoLmsfmBWTxUarJNUuFkKc6kRmDJBVb1J6wpJMn3zZRybk6UjRgfG5DFX2DP2F",
  "key32": "3nyftgPo2QZYHTRRf9gQb2FrkzqjEER1ewWjPaHtUh16w1e68TZEDrovcqKVm9P5rWBApUfX3MUxug9vasG5C41W",
  "key33": "1PDudo3Q3v38CYfUkC19szYtyzJE1pDYGdwzpMyEUkBTKZudoQjQe2Bx8HwKCDTVe1x5PqYZCdH2MaKBgfRuAc4",
  "key34": "2VXgnQ8rS7DFSzqW2TAr4paqzagYwgjuZjdAKEbnZD5mx6R3poKn4rRkJE7TnrD7175ELcKEV6AbGf5t7DCi2ToS",
  "key35": "4tbxc1QovWYDZfK9Ue1xJoKBpK3TDYE6DKt6fJc3qaxFBbhRFQdK4BRKwh8agGW4g6i1P7tPwdvwAQwXjz9pPd7u",
  "key36": "5Zcx3GXW1pMqfAjh3zUuUqZXeGudG34JLLWoxRGKzmuYASuaqrSV5Zm3QS1HtFfvvQbsssezn4mJk9cEjFAApyvw",
  "key37": "3V5CBz4LxdrHj9Kf8x3iyKQ3GS6AN1XtNpNQJudNFv6h6ntMFtgCmuVLcuF9wshEmTdcbvqeT15pc3AEy4JCK2r2",
  "key38": "4KVosMhKsanGyQrrZoNhrNUmiMEispEUSQ6pbvWZg7mUvZE545psB5uA5j5Mk8r56z694SrnxhkgaxKh3YNN9qQP",
  "key39": "3CEKBqvvBvSMMLgCXHPnrbQmfk4ZTeQNTVDZ37cJLG55ncd31emAQRjhsoMKoj92oJwrgg1Pz5X5ACVZmCa6ZFn8",
  "key40": "3HfU72zmZgW3SJT7FpqDbcZSoUHShVc3d338UMAHU9vwgQi6P3RBiKhGAN5AMket8WJP6KXaAqJVLscKGrKbxkkH",
  "key41": "2Ws6ojJ33ABqctzae8pNtz8QK6TMw9joUroFpSA6WUtRW8gyzRP3WrYu3NPiXMzmnxAftPnzJGVDq1qymH13wYrA",
  "key42": "2oUR7UUgGN4bV6sfjMLFUEhTK5UDG9Ez3yY9qpGSHVkaXEA2zEKVwpJdciRRUqPgL8aPXXHXMAvqvUmMoxwhL8HM",
  "key43": "4LjZPeHJeUcK8xBoK1Khhen1JZbuEoL3UvbDvZe2NVsWzQQtKazTpkPuDhseJetvh9o2UJBe1Upfg3jDXuUn1EZb",
  "key44": "3MDSLmMXiGCEX4nA6s9ZEs9qBNPjsgtjknhVrTxrPE2ziLeUqmSYfq4v2mTiJk1Tz2aGA2x3zY3xrGFs97uS17tf",
  "key45": "2pKHa3WiSHL462WsuUqzkQbapmhzyeUUgWDKvWNJ4KKuw8SheiBbx9nWEQtw4mBroT4knG7Vngbog32QYjie1N1h",
  "key46": "6rCQBrMxotv3mw4q2seLyqsLa3ssRoHk2qUJGPxGnoBsMxBFTCwkXoVYTNNJbcAYMn8Yj5beVFPSSZqLaQRtMPM",
  "key47": "2DB5FP3tJq1J62xiTNh991daoRLWBnRXDaofCHQzT5bjp6a7zGepGxrnZ28Z6zNkVwbzawQM1TorUX4RXkQ62AED",
  "key48": "5PyEMCpdKVkL2juCaLxweW3PC1F6mN2eyCYtFxEQmEFfj1614p4SLVNAfa1GgvwAJ95bm5ef4uy1UVPc8aXiujtv"
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
