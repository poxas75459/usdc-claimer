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
    "38roU3D5oyr1odtCPp54a6Qgn8s7q99pwiiMPAxdLtMVxQVFMWKZS3Y1WJTVBK71Z1XNAKo3xQseCzxUFscyXKod"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5T2gBw236DmfNQstSGpxyUdzE7DZxenfKX3WMLmSxNgnodwnNQ2KKFwQcbnn6bFxhafLGDPohwks7fmH9Nai9LY5",
  "key1": "2p3Vkfu7SCNS7VHXtAVKhRPs5x7iQzDcH5C1BWYeEkPKy3W6hjxSiNNsip3XUiWpfd9gqe73mQubA4X6ZpZ6nisc",
  "key2": "5EfY9Bjxder5ZkrcsVrGHckNYD6QRqqoihFor8Ptka24NM9hMfufrKonnvKuuzXByZeQWXdnuwAuAnDsQjyKcezE",
  "key3": "27iHLuNh37STrfCsjW4DrK4DJrDz1ENXB2J3vpncjndxEJaZDoX8ne1zfs5PLg3o4HJb14oA8Pspgwx9EtzmGkRP",
  "key4": "2VbBofMGzm7wYUxckZ9Y97TF8NvXhsRLz6d9Li4twFLZnSFqboznGbHsXbe6zecnyFD59nJiUQLYZQb87DnvFCTi",
  "key5": "5fRmKYA4diymjxgBRP7etM4qgdgs425gSeJi7xQbSbPinbDZbUWRm1Bx21k9APNH7txvRxbr1piL1ia99RJ1CXEa",
  "key6": "4QKDXLMHS5BEFPmUiydg6ByKXTri8DxiEDVmtKQYj9dFyURjuR2NeHKCGzeWVN5X8niqe2nx4KoTmJt59f9avLBd",
  "key7": "3Syh2mZLRDNZ9U3NszDUj7QRtsMXNxC4v9fR354YvsJenQno2V2sgaJnJq2hXyRC9BPpRUHf7oHb4g6HmDm6Podp",
  "key8": "2zUjcfB1Ha69aMTY81JSQfWDPdkyvDe8b4T94WoZefUi7Wbn1YJR1vPvCrBXuaLR9TfhMjc9zeWqDrmwxAzrXNnu",
  "key9": "2SFvCzyP4JZFhjbig2w98cWbNhUP4TvZwNHNbQCVjrLyWM9roR62YhLDHDe5V5VXQb75tQzvkCq48WpWywguzv4g",
  "key10": "4zsziHNkLU8dhqUVkRxVSzVmJPyuhTGShwL9ZLs23AbBqDhb3ptfLHRPiXtoELtb2QhmNgvrrgSnZarWbvrvSVPY",
  "key11": "2a4MEy3ZXBm6zmxubz4vuPBZDn7uUxmqMQ72g4YagWwGruR3Tmxhfp8DKAxaDnfCSusfXeNkn6rtbuAZzDa57MuJ",
  "key12": "5DX2SpGhJWgdemy71sEi8QrLU3khMfKLQZwgE49eQvtUxvn6PBnBFzKeiXWqdQmmDwrecpzo3TYJxMa54T8vc8fm",
  "key13": "5csAMMKuooUGqDKzcXPzG4iJyDcTHt1RvciHjrJwoGiYNXedbbbG3ecLiFJuEpQ7aHdfnVwu5imfTjcHY8ZkH8k2",
  "key14": "32bkqDhz1UwM9MxEjFY23yCu1deE7JQyfvNyxSTsGqAtrh9aBiCgcnhEczsnPVFv33MKXNUd4RDqDAUjptqGvvva",
  "key15": "4ktt53nXt5Cfo7c3h4Fqh8YGPoGmNFKivdjcviTUGTkZzFFyjstAHnk1JpCW8ea3L7DUhr9xpnuYgVNR7YCueDBZ",
  "key16": "4DJa5HejDJVbGUx4f8MAtEYzAofteq4CnMqsnVJVP5cQ4nbQMDVhNKit4sDBBLDFCmJBmA8YwvAKNNGLnGx9MSY9",
  "key17": "4Tj5vE1F6at71MpvRJrm5AvXsDyLggzGv9YAADBKBNto7mL7nx8Y4wR2BxdYPF7qDnJ8KyHD5SvoiH5RiNrmmdt4",
  "key18": "4v6RDyuyVAWJHNsY113C7nRhpfdUqHrFTn9VtXnx2qVNjbV3SPz2oKZELKiDT63tvQ1ogwUyHp3cdLXo2svTudRW",
  "key19": "vHxJkG4aV7ErUQM18WqDDVdw9NhrWfHWgYE7iYEEKsxs2sh7urnM2raCdcTmczokB3TqrtuQu7ZNPVAy4Q6mWoQ",
  "key20": "2rRQiVKtKewLjjH2LE7H98nCmUyZcfPc9Yoie6PYbtEy96QnQemEzuxyaTQKdr8V2UQKxCftbR6AkaA3n8emnZax",
  "key21": "5VddrHj6VfnTrkrMayAmiQMXGuMBtukmxpBSLmZMJV24ASKL6ijSPUfLTmfU3t8VNAhcSoZkbZPdQDXfvDtj1Wx5",
  "key22": "3Grk4K4TD4GFsBZbdAH5PviALxkyfRjAMKA38kQsTyLJMwRNaqrfB8qzhgcZ5XxHZyi56gxYrpaFd7zcngsCnVfG",
  "key23": "b84nRxa7acHYvAnYoJsWQC9wPaZhrTMQbSp5AbzDHUDFr7PjgePdxkLFg1w4uHaWaKK4k8CzQcm368GL9iwnz9g",
  "key24": "3em8J5hPd9XvytdtshgbvnFXwb1zZDdnTe1KwGhzy7M93572FBaebdu8DUUrZAF6mTbSYrFRhBXS8qsyETeq7mmD",
  "key25": "4PX6y1FFKxotBFBsVL1y8P73n7qanfEZAiaY86AoKh5XMUmnU9BMpQVTmzmznbEuuLULhaTuWB1iPtS5ti1a8D1F",
  "key26": "RkJdX8KyhDjpiumtf5CHmhtg84BmqkniSMhcsTxcPpiEehtb6W2LcqwgGHratXHCxBQyVA8kntY3gpEgQUPFsZd",
  "key27": "5VcxUxJ1txQ8mCHegYZNheAYVRQGnrXUr1Co2gHxf1Nse3RK6ekAAHAmj3mx6AWZfFsSzbyuDtK6aEMg7wUSVwgJ",
  "key28": "3T1XDTFBeW46s8Z4b8PHWf1ZHnyiVRosfikaqBqgBZWXWaKFLV3V3RiphsBcPUvpipWGPVeRXR2Q87sVeD8ti8vx",
  "key29": "DVpQbzD5Kycc19bJ7rRQhfQQkr179UbZMHrXKTTVT6BnJiwgVyg9SXEkm1hnrt13bF5RTZC4BYXNmTaGwTqaja4"
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
