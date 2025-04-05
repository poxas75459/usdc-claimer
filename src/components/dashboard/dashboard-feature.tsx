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
    "5JCHmhhYJgs1rHLKXf4E2a65HKXSHMexiqYmcMFzmTFAvPGyC12u4suQ42UfTWmGPsfJ1uDqHsFaiGBqqT37tUJm"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "pUTMUqvCzjqAxqST2JpotEi8aowgZ1b7TgwJ2JUR55awwvuVqtcrgyKkc2sqTpFgWtwQWEuaYSWAWS4P5JAgNaX",
  "key1": "48JNVvEvePhXi9NDP6fY8gvht6LLZSLmsjLfE8J27JHHweDZkwVPLDgZyLtCt1eWd7rkznfM37n2TAT9uNPfTDE3",
  "key2": "4rctPEQiKpGcM4n2aGmT2BDyfLpNyTRiYeEE5vixSrLGgvL9BfuMtyTxBMFKzSvdsHdX3XrPnyL5Zok8D2Tw7viy",
  "key3": "5LL4tXp1RMQbKooLYbrpsAwKDeWU2GMVeLTgk99jp6syg5oCmhfzvBGQ3ehwA9gbCmZJp1kC5sA5BphMDyTyriSy",
  "key4": "27zRcWU6GEfu8BhvDEMnorXuw5TceSdvTLoc1pRWVVjRtkHo2hJCwoi5NdB4hRTHcesLENgC2TZQDqbUBVk1k9ST",
  "key5": "4Xkyk9oCJR2wHPqzx13mLiEZ37TbCe2QNph82Cf3nsPPobtiUdLbMCjYAjeSgvANtaXH5dbGtt67CWpjMWiasaNS",
  "key6": "2SZ94nrEmKDEfDd69x5rqN3NRUEmxiPo5hLwGbh7dZeSu56jiXZQMJ24Rm1VGVWsaMpYfMTBM7yzFf8SVrhB4wSu",
  "key7": "4PVh1UGyAM7VuL5XQmz7oaT7xZRUUsHdFbDGwwrQvsuAqipnd4mDzpaDe6dr7SPwFMPe1pqbokNJ7qvNhYbxsAKu",
  "key8": "4dZYxmJW5FRW2AMYCD1QMDPBgjyFHfHc78EfuK5b7gf2b6Fe1o9xiuZkExAa1EoWrJmhuWd7n6bShzZWnFGXKLNf",
  "key9": "4zYgDUMBHxn1yK6MRFu1AUwPe8W1y8JSZQdKeAD5xmVxb5EvVryiXoMb6k626RCjV5BpKBabcQmCNckxfCgCBviy",
  "key10": "5PPCA95Kyskjzg5asKyemZhGp3R5EM6j9NztTWCiYt3mSZQ4aqTA5zBQLUQwMad4TDmUN7Kx6nfiWs3k177VQQqm",
  "key11": "2656b7nqvzD2YqEeoJMwBDxiLJggaUWv43uF8tttx6cGEKUPD4jd74ABbwgf5uYu5oEXuhVhFyg2YzU8mTTFnM7D",
  "key12": "5kzaCac1Mdz89QuQP8t5rPiHioJsA6Eb7es28vcyEgV2DSSCsMpWShwLue5LAvmZCTWT9xKDXaubGassehdwArzo",
  "key13": "581eWuN3UhvjWi8kdWurThh965SuQSf9JZeXmoV38BWBCfjd9KGYCBBnVvBSHqVXRjpWoLtqx7SCgyNZnUbfw8FE",
  "key14": "2Cqt4Fu8DdmG2CgGLLKKdi69v9NWok7G4qT1E4uFNqokc6jdRfQzmcCAaxxHF4wfmU6eDYWMeZs9hMAAvNPdHXRB",
  "key15": "2EXrTn6CXCFqvtbiSkBCYkvXudhxuhKnKyn5PNbegseAKfqZz5LnWYKiMcaELv4cixegXXvec97UiCfcTPr6hMDp",
  "key16": "5krYLHkHRnNt8QJrD3xq2nzjHtWQ6bbzY76TnGB7p7BypB3SCczXHwyYNCNfCXeoCikVLWdRjJFXLM9E6xzv7Ysx",
  "key17": "4uWhCckdmxepyLfMkpUBwWGC3bK9Ny8RAqYUmRpvsyYL6ioFFVKPBzQtvG1pRErUZiXhV2nDMHRbMQHa2XUTDQVK",
  "key18": "4zFhdAg17dU7Pe7VrCYzQqb6e4SQh1ULMkov4ziQ22nHoCcaSo4ntkZVy6QLFZNC6ShyYs7YtGXS7UVsKpDsDyDs",
  "key19": "2YL5p4ahepCBHjwHzwu4AtKdqTfZcDHaJfEydV6bSw1wCojv8p8FShdWEe5Ay1Dyz4WJzd4WbQP3cccCkvYguj4M",
  "key20": "5hsjFb2HZtHTT4JmrgbAULfzUGGsMa81bWs6my46ydRTTmCjmRQetQTm1T3VZzNV9KDrTPXWouXiPJRALSnCQ3Mh",
  "key21": "4cQmPd3efaU2vPsUHotZ1hyS4tv14Csbx4t74T9P5CQJc46dQGQ2pZYFLKf4fz1gpHxJuPvwVfNFJedG2au1Sx8y",
  "key22": "5ue3koJ3ZsSYwwZS4cskwXb5y7FA5xcz8gZKauzgn1J996uf6C5G28qC9yx4pZsb89wLn8aHAStWAyS6pa7kpNc1",
  "key23": "64mzCEph9hiUbVmpHSHRv4vZ5wpSbWJzdeUFMj6NSjvMyvEpZK5MB38wR8fvgkWZbfEjDPV2mL1DkBfeeAY2VGL7",
  "key24": "4vjpAjV4NDcwHD3geguMojvRirVAttBaaX49g6DqU7Q7pVFFAdkvpxqTLtmkEPtjr7b3yPuo3JJoQVvJqu2Bkr3D",
  "key25": "YTcmFNSdaiJMe8d96Chxf3xAFJUoLACGox79PXvLxjiSRGvEz428KUTpottCUpJYjjaJ6FVgTLQtPfUjbiey6t5",
  "key26": "2ueLR52qyZVG52km11sh9wgkA32Yf9wNbv1qBmc1pjYnNgGf8KTqtwAkd7kEFQoQLBpFxGVopXZMSs97qNeF9cjd",
  "key27": "2oJcC3D1nfQjj68XSEGHeMtf1Gq7AcAoJy3zKHBS5y3HDY9tyA5YT85eDeJnZkqjGetP9173sVJveWPWtH63VdbA",
  "key28": "5c4zD6xfT98QMVDFirfXWxKrWpgnaN6DVxnXJvJG5Tt6mB9EN22SFtoGF8F7yiBnG3SmwvahASHnBVzDRQ5abFDt",
  "key29": "4Honsma6eJPnom9RPWxd1z7Wx8vyAbWCpgJdn6FKkzoifqPbvGgromLpE5kfapFAaq3pdXTicFJ4py2ieJzh4Q9z",
  "key30": "2pKwN519zBXNW7pneY2FYmyKN5gcJXRaBLLw2bih17KB5aYKHBC4xy5qN3eRXGAi1PeYEcFCVvPayxbq85updQ6v",
  "key31": "3zCaLLeyb7zz6WKjamCLDakduLyW2MjLkpkeScU6T5mkRT9Qb9cz35snwXGXySeS4sN3BX2mezEHWTXHCdT6aF3K",
  "key32": "2FxHkqmjsmKbdj1uM1ez8wzFmPjAW8j7U72BibdHH1wnmZiNCVt6NxvKMvgN1BA3ricXZuCubhAHdjznXgjBcnKQ",
  "key33": "5ERyyYMakLEwgqWkEaVnHyKu6RAcykcw2n2RQAvLesC58Tff898Xv3EaLHS7LgamrHiVKofg2QkqP4aCtyp7StMB",
  "key34": "3atSjwpLpHmWopVG72vKY1nYgjBSQ7sm1PHxeEp13aPoAfkrJaE977uTTUCDZkZ6zJwmRDDUYbcSW8RTMGtoBV2n",
  "key35": "jgiYLACmLLvUbwFHTMx2mhpsbePAw4f3dkoW11t9U7Po8iwbLwDC4eNgVyXSiAKkwpTQtCBFNsSgg2MS9kYqcxW",
  "key36": "4RVHy1a95T4xviW1KPriMDsxCUwBMpYNDiYh8MDVmV87L7mm9S6vxT7rXDUzn5iBZj7RhvWX4LDmLaMAuLVK8Xb1",
  "key37": "4RzFrkY66fe1AzHtdddR8teLc9gMmMhGL3fRu16cgTziZaZVGjfjFGp6b8A64SxwqB5ZLmms9ZjAKmcagFCzKjNt",
  "key38": "1icAbpjWFn9HDncR7xxqMpULPQdULu2YqywhaE7nK2nbBjXbTYrNdZMzdCm24LfBTTBe5r7CfGWpBAcqHGoagKx",
  "key39": "4SXqMcdF8WFaqYKyK6Cw9LesS1LmE4JV99iHAunPXPWGMz4fpvzNzxpdfCVu84X7stdFKqxMBbHcs7Tkv931Ljd4",
  "key40": "66xpVRFHgGSJFqGPH5YZyZ72pkTEJdqaNNecuqRSF33QS8nGyr5wR8omFaWFpdpaVTBZiqXoWQ3gS39AdUFGvume",
  "key41": "35Jxzh76L74trDvUC3gXLejpmiem8v6mvHsAxxY91E1N1iLExeGSRiuxDF4xSSfTkB6yuhXmCRQeh7Fb3EUTijWY",
  "key42": "3NnEFVv7brhRmpZ1zQ4TV9pa19mngJvWr6i3gPktWs3eXnNMSxDB1rgyAuPvQJEAVcuk5q5BfNQj9C4TtDERjk2C",
  "key43": "dDJkHaF2p3fyy3Vydo77zzag6vEEiy2fVRrNnxdchx9Nnnf2ogefKiPwoX4v4F67hqnqG6QMTTaaE3KML2FhFX7",
  "key44": "4D93dgfb9odaeX4r3imQYMHdUTKSE3n9boekPEesYgm1GfCiLZQNdbsx91BNBpbCD6eKR8pCUppWFyUgTWEQ9kb9"
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
