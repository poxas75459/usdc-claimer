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
    "3FwwXHgNsmfjz9K2D6MRwVZFQrCYwdauLH5gV2ydvmVMdnxmpRTUmYJKjgixxodudjgcukeJ6VRPmT5etUwck19Z"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5MHdmJxJNLUyNnfYayLJLtCFAYsQw55JkPoRy2Nmff2tfE6tMX9nsabqRqab9bnoXLsWqXoNScX1sQNCW5ftNyA5",
  "key1": "5s1XaJ73TKrjy4PN6BMgU62fKxVfDpfL7KMq4VyC5azfxrBCUHMD4X94qYfFK9c8zfJjxqV9NmzGGDEwi4v9KtSV",
  "key2": "2JencK4MqcKHJ7mepL4fJw1qZfAY9fsxG2VFmMRUHD3y2yqryZSHYh4xgKuTb8eXthgHYJ3zUkUPzK6kaLEh6Jpi",
  "key3": "3P1a4kCsu69G9mg6wm9wYMRpoVek1saUJ7xWM9hKY1KaaZectqASJkRksNkf5d9SdoeAxzYwN1KFvDgVU1zsnpgz",
  "key4": "49UjEBcGxWcWWXjrPDAVDmRjcrvNydVyVZAXb38vxg7BLUGDYffBh2KU3KVAPu42pVjobRYbdSr6Ra2tVmhxQr3E",
  "key5": "fqrK2rvSGU76W1XNvRfVsyGMtUotjh7UuxhJBvViiG3ENW8MGHXYfQxWteAp5dio6NbNgWxJv3CLqsxvYZub9m4",
  "key6": "2GYc8QTugegvaARM4Rp1CxGpBNmjEq9zPAQxNSNbcwFCYpFiELPUNPcg92CRfRD2VPn3oHUmcTbmCc67ahEcEnjN",
  "key7": "5aFLtwXeb6ut4huVMMPiZ69LGjhzDR7UoD4rPCsWkFsX8nnLF35m6jkt4FSCWVifoiHDdm1AMjSGUhwuUMuXCaDf",
  "key8": "5HEsSuZGw8agcLNBq2Sg8UyexEqZhcgERgUhFy3hRvRvxK6vmQPJcMEi7o8pz3veK4oRhzFSHeJSzYkKp3K76YgR",
  "key9": "pUZC4NDeVaQLrYSzk76iqgaXdztQhrZ4yBqyncg2Bmv9wQphv3cumPX8Ev1oJw5NDz5TmGVYXucKq6ZMip5zcni",
  "key10": "5KZa14A7HDTLgrufiXASLBKGSBwi2Ghv9a9NZda5uonui2VKVEiBehBaN6ADxWRjNdSisCF2VSTg8dHEwvKsVsvE",
  "key11": "4AAEyKjJkjEXTVqRghC9vPgoQQKYjusXb1cQKMMDc7mGMcu75hj2WF9C6uVcP5ivqh9bJsPEUiwmgRgjAcYdyk2d",
  "key12": "5KYFSsTGzxH2NEZvjB1RTyrBmgjyqy4qiQdUQJEURP2NDhQv5LMzwhNSdRN95FfHiQJp3HEFcS8a4iYfe4oh386d",
  "key13": "mWAuiHhvfrNe9JESQJy8b5mKcqttbLyAoSzGZwphUkEaiG69fHYhu9mnb6tbhRSrVqztmzWtSaZfvJQyp1qRZhd",
  "key14": "5NUiAw4sg9Y1Je3SHohvxX3dQWmrD7LpBrrpU1F9UVXhGSPWgNWfpWRSgiWpmPP6WPVWzcSLesNB6PaEDf2ytPy6",
  "key15": "2UbduRAXgUb3tAeydWxV9zyLYzcN1C2r7FY151fr7TViT6hWs2ERLdv4fNaNJT8B3fKUg7fG74aZqfKw1F7YVQCb",
  "key16": "2B2i3s77BCepLQTRWopaZy9Dya4BPcvipGRvnfxDxQisg8VAu4BVhA3xKSCcjXKhDgREEYfyF8sjPdnU7uNK9911",
  "key17": "3oXkDW4ucDur9pKCvrTHRWwV5GYqBgFWmrqQFfk1318HtyZ1ZEgARRH1bmnwxtyZZvPAorr4JxAmESV3LPA9cQBD",
  "key18": "2BvQBMhsFpY71SzwDQc5PAX7yqUbkqucPJyXv2iwSgd2TxDCFNYVapWsCNmgQ8JHUqbhrrF2xVdmbFseaSpHJQXH",
  "key19": "3Td4BTQ9wdX5a7tjuzqYQ8XDZgAHeDAjTtmxebpYXi7zQwgca5T3qWVGx4WCBzJh8nD45t6yybvXn2WLPQzjZCaR",
  "key20": "2W3MxsEdHp571o9QRFhTAJ8mpmXxNW56tCZhNuSFD8F44Hhb5Xd45KK1oWCxuCpfV9L4uqgGHMRLuWQzwfPLebL8",
  "key21": "4n2j1d9mEUJXysHgxtDucwjJffQGxPRSyYGUgnjuuArCELVXiTV59C7JPTUiJXbmgqxDhwg6DNV2eX2J4uZCCT3c",
  "key22": "4911c7QcApf3ZCesehzTjkdPK2ongVTE4qaXr1koFkrcxYHxY4BfBed4RACBWFMnHd8iEAoA3BPHqgbWiiFvej5M",
  "key23": "5Dx6jcnJ1F91mKG9ALKGV3X8iGczXQpu4nuL8sc3ZwUwgKdpP1ZKUhnvca5oqv39uUwjxRk3gznHs1uoJmJj7zkD",
  "key24": "4H8xRRs5HfHpTnNNU7wZzAKHnmczZD4QLazf8oB4mZVkKSBYfPKkTmFBCCgLdgzRr6KkzX694XMmmhPW5bYXtAJP",
  "key25": "2WJBieaPSFBaUWswdujrS5ioxYHiyZvfLhAYzZWGkTE2dndH1sFeXo6oYzDrFS3ximdVHML2dQypFnhT3JCfw7gQ",
  "key26": "25PHJ9sgnNku3Uj5aZMLkWRswdSbryeQXpPMwPK8scwkGR9np4zH6ahN3SuWv1yGDLDGTP7E3D1JKS9xLsmS1Sk7",
  "key27": "3fZhk4LJympQ84NWFzFi1jEnw2yxxhLWZGFiqWGXTVzVCTHfQbAJcqxmBcu8yjH8SGBokzrmCELftAW63gjMdmRr",
  "key28": "5BdFbMFidS8QWQDm4iHs45MCFUVgKZNNSnbhN6hjezo8TJ5efGhjCPh74d5PMiAVct2RarVYNsVEdAaeXJaiob1e",
  "key29": "3KXYrCMGxaWsHKgCXXPLthraH7Ebu9JvjY8rGkSLZdoa7BbKaPfrYWEPgJs9ykrYAiXBPdnHVkJW7te3BH342BMw",
  "key30": "KBeRsVtboVsnTRDZRvPxHcqhVDTACB1pmyV4bPTL4YvCLhv6oMndozzqh63xs3kRxLZGshhXwQVMDUWGd8UW6vr",
  "key31": "5gpjTuTu81a9XgUmUbADgD2dSTBiS5xTWuJp1r4XzaMBRCuAzPCvgdSJ3fp1Wdx2FRBmLRZV3cDEHBYyDxX6JaD2",
  "key32": "3VYy8issRP4PMsHUxPKBH8KygAUwsxBxiyHVhDkBKXDnmUC8P8yRhyLn4npdhsHudYuwijDsbpjKSw7RAoXM2jgt",
  "key33": "3G3v1SDs8pZXDwTutDWVoiQEVJT5ES9VpdXhLtPUxLu9bbSiDsjWT4jScFmkfui2gSZVdtxiNSVQqdcgn5u7R9kj",
  "key34": "2yzsowfFubvM1xKr6MhfxXTWdoSWpC4175j7yWQGLSRRWuxJ4C4LfPj6SH6o2NzPSSMDdLEpw8V51nr4NfJHWMxn",
  "key35": "4WCYtgsqDM9tdgHt9qa5jsG6Lhr45DY1ssg6Dfq9NC6StjtgHW6Rh3twp52P3zKkMmPjV1pq87zNVfq9xpqV1qy6",
  "key36": "35iBGUENMHXVKbK2FXk84pvunCRz5akLEEyZCm18j1b51qDb9wJSKZTTaNhz1agTjbaHZTzQDQgKtvXUS2DpcZuy",
  "key37": "563ZeZQ5gg7pKjHtyiQ4T8SLbcgaxwcFcvUomoFXUyzETN44Ze8g7mMeUdSnbRdymito3tzyX3aLZ3DVjkyD94dX",
  "key38": "53vcU4bEkk7u1uaxCkRgWyHEq68HUjmH4pKd1sotxNLT9HHVytsTVtonXMTgzyBSW6cbGPLNLT6vKj8dscXFeNrm",
  "key39": "3iK1LKCHJdDYLD2KQRFbuQkcsXsgpFddhRLTDoDDzpbn8UyLBaTBkn4Zp26HBGdnmiHbN11rBJC5Ni8ZF25hgEmW",
  "key40": "2LZMqArRhwwWYTFVcTMYjtemUyAShUh6nFMBELyi3BX2Ki9z2TqpkWpUeZwda6nEmKiz5ThQy27VoJA6RtnJPF6r",
  "key41": "4SvnisSci8uhP6TKWnCBXfTZQDyGdvtqc9ffo5bYorEQoZwdN6QE672tFYRrW9TmddyzvKPqTgPKTd2gx9Pkxcq5"
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
