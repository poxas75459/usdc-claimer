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
    "521MQx3ocwFU5tdQXBc9WXG2wswK9GKzMJx9cGxzXjpwVHmuVTPh9RaSPmLfz24vZBrXAfK8tQm5QCvz8XGqDXpe"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5wb8wYhXQttK6np33pxoV8b4ofCRyNS9SeVXQRP6PuQLQ8nTy7cxbnV2x8epPVzM9FDopkLMd4raLADPCLaP6kSv",
  "key1": "4K6NUTkXv6cM6KEoSNRPY8NRsZZBtbsk1anSCUZsZTsEdMyCnaKHHDXp6r2qNNio4wXTcsFw3k4Ga94GCCkyDN9y",
  "key2": "X4Fp7HGreDQiqthwwEH4VdvFdBoRF8X4F4pw8LbijybNVAUFv8u7143ETeVAZNcf3j82amVnMtDhE5CQsnyCzV7",
  "key3": "5RtgFMAN7MxgjccrJj613HjhNmZaWmXiqDCKECxB2ghNQFGL9msKTPQ5NgMwigiPWfjQE6BmiCsSvdGPTTNgLqX6",
  "key4": "2Mz4yPX9Aw6em9vMNE4tE3VDrdBVtXNsvcwSnuU4AYPQAvHRKPKU6T5QnSQEgjTyPdTXL2DXtFPafAnRzGpDJxko",
  "key5": "31YbzarwXL26zbADsLJhdCuvZie43fiBvsNMaTmouoCqqCatzKVWLxGA1TNRsZG5DYosBDkmabrnLdwBTciLd5Fq",
  "key6": "5AdfePKDEDmjy8EzJmHEyj135RRF5NPfURAdoFKZdgZDUfQ8wyvgfH1SLMtNKHJmv9Nh1o7KUYkvCrZw4p3KMnWQ",
  "key7": "2ZUji8y2kr4RXN1Qd9G3dAwfFRVgPggkWdQ1dCssAtFxRQ5XmCJ8AE8MGqrJgA1Qs971MeQRiLg89bwkjLki97J",
  "key8": "2dqEqpaHhipymoeebE3ZqBGUp1Y7frj2246ybdouwHKGG7DF2t3gbqmWWUTNDweSfeKsW29FLte5YEpqsMk7osBv",
  "key9": "J16RZ9L9tkaRVvMd5rTudEpWUYAeB5BG4aNqteHV1kt7jxLLa6TYGhaJqe4AoNbQTsSDMkWTHrgEubrowSofPQW",
  "key10": "3Sa2PYB18R82FC3edoHxz6ehu51dsHp1fnjky3Zir2DRfWYzCDBEsjXiA6h6wfbYFDKQvC4N1LECwknQZJmxwYC1",
  "key11": "4ktcgMQ9Lcedzkgaqb7KqFJzxq8X5wZUAQX95tmNz1YQqbbC7MoCiUc2ZKRYgEn9jtnR8w3WRoYeM5GCm87zfkBU",
  "key12": "4MMkHJvrL8J5DrpMwWT8TzDDYaEEP189pYzuwHrdN1rsVvmx5juUua9qPUHptAPPr2eNTiFqbWXcyS23zLptdD4v",
  "key13": "3cgrZ7GVs3rbo9FcgMiZc9SoTBgYNPhEKg6P9j9QK9ZFqn1Xi8xBd6D2C6stzptJVsDUCHMqxWMrqaWC5JLZciuU",
  "key14": "5yhkr65cniY3WL64N3V3s9SS5Lj7WeEJRWQyvgaWACBjxYywTLsFn7CRjhBGeiLTczENJwgmdKijvyGm2wdmGoLZ",
  "key15": "zY5HCGA3rpJMXEc6SFtcP8sr6jbQuGPcfFKMEv2P2H6E1WiYN7SppJhVMPfaHdvGiUKv26H95T8sG5ZUDTGFPYs",
  "key16": "3znMeMVvroSErxegztyYXwGF47dxmqr1bfPcqmNTxCajRTQurXEvTYB8DZHtWfimpiH9JqYyAWmdtLE2bMw27SjK",
  "key17": "4qga8p73WbugMk3UggZkxyxV5o34WbEvGDH6Xs543mQQQUf4hWGkPsCwLNsGN99jadw8RAZHCTiVqVqwJuZpeUHH",
  "key18": "2DLZPZe5KsmuSjRSZ6toEMd1BdMFvARjs4c32kA8yYXNYoecY3dJiDXH3NQgejW5VMsHwXs8EeHaK6qVEkP8uABt",
  "key19": "aYDskmjZYRErXQhDcMLS6MfQKrN3ashphmSwfMdr43wcciiy6cQh4QBq7N2fqfPxYRY75Dj3y7EH8fKtNUMKz4q",
  "key20": "42425dVxq7NgHKG7Fe7prjFYxnMTgjU5TAdnaEtzRNFnkXT1i4KkZYnfq1QWHRWWStWdYnZTuYDYy61AW3SNfepV",
  "key21": "Deac2oVcaswGM9Eno3XnnZjjTWnde34JCPkBev75mW7drDWokoJ83hkcPWr9AHLJCxqGkp7hkPj9eqNz7AVHGNS",
  "key22": "257w8DYfUFAPfyg5WGSL1XfTBxTndu2nzyN8LPENGcubACVBu5zPauC3d92P8LYC6vcZ3pk7UwfoaWAcV39GnSno",
  "key23": "45AD2U7NYzp6EpLcZoHNK55wSBgnbvgsedzRUM41AP9pwNpCfhGNCeYyk8knt9ZxX9zPyMKMY4uqoX7iAewk2fNZ",
  "key24": "3rGZxKApqd13ANo6Nf38ei77zhEQM7wH5wEPrsSP6xSy3RKhfGrbPMqKydVYUgSewXXHV73xom6xoWS33DigVyQG",
  "key25": "45KbLLT3q6nd45Ro22TfdmnQDKgwhsji26mCrVRAXNWmzMoy2oaWyx9tL9u423cQiKbrZp4yHMUJJqRYCinwq4GR",
  "key26": "2AkV7Tu4hjoBonL6vgbTfGGQSfq14vb9iQrMkzA1mYr6oAXx842YqTRFrhJhdyy5QTXVti3AZDw2vvJZ3YYc6z59",
  "key27": "3ucP6HdrKfajsXKAmHXwiJwnN3PbwsJbnAhHTdW9LxxYfrK91p8ykRnrRjv8YXhSWXing716ZP7uVSrUperj9cTs",
  "key28": "5pAxe1bnZQTaXt33UhFsveVPM3R8gtWJv2Fbxz46nTJus3FcSR9J4Wfjmayt4P4vahZ7Qc6nPvUCqzDVL1HDJGLA",
  "key29": "5wZMH269GdFJnYpXXujHrFRKppabamodpo1JpABmBgjN1tVmzcgRdn1sCj6G23nfmBXGgr3g5ZCXaBrmoi7MvS2j",
  "key30": "2mWGLP1Tyn7D5qTyhifDc6wVW8mxvtJz7uzeFE9pwXno1SgS32FoPYbQVh4Zrs9c2DCvHTUgM3G2YrCVBx2jdMzR",
  "key31": "3g1w1rof1vfusWHEFV5pX4FXnyc8N3Lp6WWjQJLDSZCkrmk8yrdorppfzK1mPQ7wUcGqPkWKq971UX5LwroTvxBM",
  "key32": "49TbRJLLUCViN882Hy5UDLpMUuSj7k3xNARGvS9JVwjQAc6bMgWzH1kXS1vn1mEtyBMCuZhLenH5TqrnoUVWCtNc",
  "key33": "3ZrgAbqunWT3xwzRT1zvqAwhVxf7gGhx6o3RAC3YH746PrCWdUoGkTHqQi5mdFvJsmjQffqDHmJXLvgTpyzvc8k4",
  "key34": "48gxPRRQMq15ZLhAXS7Qxv5GUofXHYm5WpzcKryrHh85C9TkSpMcdpsv1ZoiBKxKyUiaZ5pPYvdt4GWrE3jMKZwv",
  "key35": "Fb3Pw37wJt7CPbzQp1W7iAC91Cs5wih3jrto4qNC5pnYm5KCxVcF5C95TJpiMVJy6FKyAW7yMMwupz2qEga98GJ"
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
