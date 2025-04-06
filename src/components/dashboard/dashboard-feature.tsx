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
    "2e1r3gL9QhB443yi55Egn79zKgjvEDacGe38cpvt7zyJZ7oTqcVXeZT6GUvmcdnQk1woqgb3wWwh92DDBi7bMhJQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2we9SoBZKy4o6Adp2HXfjATTEns2dpK7pb75znWWuHqZiXrAExj1w5NmeUfupNYxD5VGqYQnnhWcYvPvnEV3f4cm",
  "key1": "3kPrrEbmgCAU4AkqsbRM96txBmxAtLJNEtTndFF4jf1RbZY2JxiEsSKzQBaezGXNS2Fc7vEa3p8bT4uqbnqcAPDf",
  "key2": "3fDz1Mk9X7zrNjPVJkB2ipTSQMHN1YzGBbWQTgzDHHfjb1N3gkCoqhqbu3erUcogTWXz61VTja46btBCt9aHmCK4",
  "key3": "3GxTj8TvHoNUKHksDotig9mZfXC3pw7JjeCMUtyQ9HPKyqn7hfAh9JFf1hGznvWbS7dkFjAQMbh6v7Z2Zi63PzSt",
  "key4": "5moArT5UkvRcqY1uaTNQhzGSGTzSUtKfJyGjHPUvsMqGqqsSCdnND4847T1TLKjWXxUMoyHYF94UPNVwfP8gfsf5",
  "key5": "2pyg5TbAcDg9EijGTiEwY29cALq3HBGdvCzCrip5rjBAQchMhmh3D1L1znfHUA4TNRGL4qUA5N35Wbcx5h8webA3",
  "key6": "2JdfX722WPdcALB41zoDgw6YkYNnR1X3udxuQwVRSRmmZjRUuGsRb19ifvg2ZQMoouNDJyo7JCpQH9QwyUQmKMYB",
  "key7": "4bPiwAJ8xwrkNdfZJAXTGV4Ao8SKoU7h8idiaQcafWAU2eSjQQg6dfbR5f8uY662rUJP3zmgw2Ps1Y9BCcWhTa6D",
  "key8": "5H1ygp8kbrGne3hoXCFnBLstdPShkJ9vcEuypZ8opAYJKDc5vcdW6EAgfQahFCgyCncibStC7AseEtm4GfNzDTvx",
  "key9": "2NgixJw36z5wEeSPckKESpTpFmTzGDHg8Q2hi6S5JiQpbbVFdBPJJogdSA7zYkddnooATjDhveT67Kmk2Q1qkNA1",
  "key10": "2U5h4KuoYwmaUzM65mhwkCSJLCuNhxHgp9MnwyJZJcYhequ9Vfo2az84dunT78LzB8pgbMvEEDwSwzutxX9NRcyt",
  "key11": "2n8NYL33viBcKAS5eRzjhgisN6kXtVQJPG6XdRznXJ44m8AWN7WGTCNfRRKArLXNbhAJTxKw6DhKZstzerWeKX3F",
  "key12": "its1JCCB649m42DLRAQM4gRpQEcTXhJqZcLmSrPXNue2NzKqbrXZ2QSRBTvCXo9ZG6vQeJGGJV6HKikPcZ2w2FC",
  "key13": "3J6GXHCAZWhecHWLq6iP4oCUm2rJsSKeqGy9M16v8EAdrbtoysPaMAg8DoTzHRCw2ffseyPW9zfyVA7toV1oPCLU",
  "key14": "2HzfccUcgPteCyy4NXA3mP359ziowcmz5PPUfHo5SQ7dyPz6nH8vHJLxdLqYjZTB8AGzfJzxZvd8wvoEbNn3NM5s",
  "key15": "4LRDXuHDtU2kQVpoDKFiJKNVHSRk4imVopt4wtZsn6NkqxNUafeR1wt6Z4xQP2yWvyyWHiZi417kWTsFTEAAErU5",
  "key16": "5JdctsLVgyg6kw3cemBxXj6dhvNiw57t1KiiirEshnzaiJt5v9Y4uEJSPD7Y2pEWYmJuQMsrMz9KiZn953SiQipt",
  "key17": "2kE5XtFodD4ipkijAfCPEn9by3KroRiFFYsvftbw5iQLSLhe5dSC5MvTwiesBNMiAPeo1pQwv1sMp8Z3AMuHZXuy",
  "key18": "4iPugfpxTNqRsDzNBy8aWQKB8cDAEfz1Sjh2Z93WYYwANj1ygNRYK9ziNuAnTxbXvhAfDiN7zsgEjUHKR9yvNM9d",
  "key19": "aMDhHQrv2B8BK3fZamNkeAkzbkjT3dz1RGvZfrBmkEV6XvLe4dLQzvioS3wQeJdWHgBWzTypVMD9r8GszTYtcbQ",
  "key20": "4nMvbnHyCh32CfhzR9o4YWWM7etFaaYaXYhnAgjwwXNbxrtBaotTyW9L7CCjXPCzMYF5aBHBw7dXvGk7RQPyG1j4",
  "key21": "emCVuuFy5bpTfRxawzCYQitL8PMT8wgpunoRLMrwcyfwpmX3f5SjRky7pZpL4MEo6V7L3y7kFpBPRgQvxKdJWtH",
  "key22": "46DREvKuutygfDuGFZA73XBvwrSwywEdz7FpRu1vhsr9rrEcUjK2wrYh8sANHJh8bUFQL8cdwttmzK4pAZvxkqA1",
  "key23": "4wV5eJgX5RD39dqGHZk5uEagX3KLgPPxcHc8vyG8uTF1WrHR7anGp4jzKUSJCy4a2vosRYRZwiVy765ak8vAqcB2",
  "key24": "Wa9h5RoYNxEM9gyp9grQtgTUKW2UZvv9hxyyWgTnAi51hxBhDe1q42ZpeeZj9tQtvShmUJ7wTzNFkhzopCGYGni",
  "key25": "5FZ9Yx91LTuAuBgovxn3eGQishnRPRuw3HpyaQeToxC3jsCcsiymJtH5pquMKsRPPQZ4MMvUzRvSmkcCrKXiWbui",
  "key26": "oBeX5ogT8Q6n6Cfy4fL7Y2X32GcMyAU7Us2Mg9K5uDwyWjzuAmjVgKDcCcuDMJZzmNAAuwWYb45Xh9rJeRgYNGg",
  "key27": "mfHkv2i5EN63puNAsEjYo1EuMXNH7k8zAyvcV6pyhxoD78gcA6vU4pAKbVNZfhmpZdJP8ncV2FPG86sq8LBaokG",
  "key28": "JBRFQNJYCvxSa8eRiatFR38G1pvDD5haU7jAJWaFULVFgh2rrB7th6QjaAxc5PeLTVgDShbf5nbV6PGDH6TGTay",
  "key29": "aCKWaiGFxvAVjWiRBsvBKfR4dC238jp4w6dtBWsbMWchzGmsW7LJJiWw4XmGZ6UNRF6bcBv28Gm7rpWVanBJjGe",
  "key30": "59xXy1bbVBCudn51K3zYzigXnj6cSWGupfNamB69Rc4GT9Vnc2CbfRsQ3DWUcAsco6NRfD5MeN3HADAYMcu8oyTK"
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
