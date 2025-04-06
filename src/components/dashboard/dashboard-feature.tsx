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
    "XNkpBPuWPNUuK3Y7QV86bXfVhkzPi7HMuTwvd4UANVgB5VpMv3mq9NDWfgYjovek84aEaGhjPdesQMxLAXPuksD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5TVS6mj2VCTLpcbR338BXUiWiWKocVyqeAGCH5WqtdkbEh7ezDgBSPMMvTBLav2sqxkCcfGoqNxzThMo23N4uRMb",
  "key1": "61XSjSkVrgi5vr5eAqrptEe8HYzZKhXo5KokQdFL2DGcGiYxcaMhc1CtoWkBg7qKsj9JRF63dp7jhHMUPfpSHyfo",
  "key2": "ZojLapPQAa6411UmNrwwdqMUL6PiZwQuXDbJ3MtGXDzR1hbaWdVA559uDf1LGfwvh4E6j9UsE9LTR7as7uJhxZW",
  "key3": "5CK6qTJ7Z8Zcgm13obzq8ANTiQHrnpfH5fL6ZKU7Lg4QRQ9P3MXbWDDcxhTpmfr9hC25eU4fU4qv26Z1456MWhjV",
  "key4": "2izw2HUF1prqgzBs5KkK7aDzACV9qLjBgkoyvMEVAuh3RHdqGZgf2aNBpMXQo1bJmtLvnKbWchF9NJXm2MUSAjBY",
  "key5": "3158dmNBPosqzGwEM33M8siS7HYJ7hx8SVLQJDKa9GiDGwCDM37bN6yzrcfEi88GKRopaB5ShZM9bMfBTZnLoZ37",
  "key6": "3zKwxRDU64e52gHvLTRpoMixwQyJynzRbr3byV13mEsxfuWLpjaKVhXEUj7u8kTM7FksZ7utEK6H3PbnJKLgmoB6",
  "key7": "3Sgi6SHRV9MvBKVnVLhgJ8aLCPHJfx796fa6wSR6mb7fAbauC4VJLhJiKBakzJoJGZU564NsPgqsuYdtyNUavDbm",
  "key8": "5TFR4g3vhFadJ5Q1yGvKgaoPiok5UjKUnYLpBeGCrpxN7kpvRAF7LCbJG1Xfrh79jhwqTcx87KFY2VTTitEdnamX",
  "key9": "5SK6gXgDm7hMNSnnFixcJLXbaj6b2ASm2W4nFW3enu9hPAxeUoxUZsptNXBWCGWPRfi3XPaf9zmHgtsLnrSqUSAB",
  "key10": "4CPCUTENB32PZTCPywfWthQdhMxSVEXjCjFkgcULDDnZxq3dBHp2PEpHAw5Cvgbf9wJ6uarwqFqXuzm2MHhBsaib",
  "key11": "47Gf5AK87WdzTiakRRFP1inXmedMMNDBouLDKKNbcEEQ5oWPEiaqRJjaLqpcRBkTNDsDqiAg1DYKasc2gNLmjnAq",
  "key12": "dj2F687HnhNtvBQaLVRut128cnDT8tE6JqQn39H3rsMU5ds3b9qUZhegwaaAD4wJ9J8RD3XCEecgYJXBwMKTYf6",
  "key13": "2da31K1JPWHv2VJWJX7JFPzDb4UmsQtCi6CL45FiMJ6MAwo4WJWY5Xmxv3iWegfgFvaEPzDcjSPjDKVBfQdPvKn5",
  "key14": "65yi5avWANAR3QaxbSTnJcuj3g1F9NKXZpFjYGT4kjkQ6fkHq16Ajqita8U5eAbpjr5DvLBdqr6DYTjD1mfr6ErT",
  "key15": "5W1R7R1LntBLJ3brvRcmG2jJrL3AMwo78NEGyo3SNPBP3B7Yx9C3sQqttnf1vjoP3XyFckaxjy5yoNhsH5tacnh1",
  "key16": "2x2WjeyWRgWvgXBxDT1bKdGRzeGmPEJNAbxnXkbLZwRigKE2thGzK8i93N4xkV3a9hMwo2hDSg78rofnNjfjhSVR",
  "key17": "5Ah7mVD31jgTn16QymvZvSMFxSCz2eB1fBfRaNmt76sdwgYSvjtacqYgEiNm64j43KVfUBra3CpHYyn6CgyFMre",
  "key18": "2xipT7rKb5ADb2ub6SFZnynAts6nJkvGwoXZGJdzPz85H6aqvxyz3J3PJNUGvMCMBMzipEiXYviHVPUpt4re622",
  "key19": "3J6TxUvnJ5FLwAuNZqPnNPfSFuG6py28bvi7V22zSeCZTKzHWjoLV7oBg5kmZyFyipx5eBB5oPj9MDrtHsZj2Qps",
  "key20": "5GSy8AbdVNYipocvzixdX1TKhcoxf5o2B7Y8YHEQuEbLqJ88HCgemM64Q62VttgSAVepjxGDhNP82hS6VwSZSACP",
  "key21": "2ziogJZsF4Duvo4zSXLFwNjXEsJvZW4dAz2WbEGDufcqXBfAGY7uQoWByDgDiXssW5vtnaLfj7ornRwwgGG47tSN",
  "key22": "5DuaJmuf1KZgL2ynZi5tUz1hEmTyEKF8MWv94J3zuXMFTc55SGi3TnRyR66mZcY6B9FVdJvq9XHSheqGePjzY5P7",
  "key23": "5RbLkNCRUR79y2BxohkL1uLPeKM7rznBTrQ3ZGdNskzUrWU7yuTsi18TKkoNFYmMp8UqZPUUNUZ1SwtBFo9qqFht",
  "key24": "4mf12aKz2UcyjpU5B7QNJVgcaEAE9ntWANR9MTB6LwZHBVCnGisN9zAkLw26VeoG4SYAkwuJpsyuRkbDFda9c5iM",
  "key25": "WKCMNEJaw1GF7AmDFkrY5LPrTWRUX1ENQY7Bo52r1gTuwEa5yJuLE6XPr1F3LaQUu9VgFTJPjhefcTgVkWhYUKJ",
  "key26": "hr7ioFWcNrRXjzeb3a7NR4R8yPoBYCLhB6TEyaj2uafniYMf9EgDiAD66HPweQUgBbQupHH6Qmjc4ukX7sN75F8",
  "key27": "2Rftfh16UZNb9PUNnTsyvMQzcYmRRW6SJHfgoNuQvX3Jcr4UsGQCgnBmrUCx5DXxS8BRXXspCHPNoG2FSLhE5j4G",
  "key28": "MYxQEN2Y2FL8P5QU1TJioEXZbotUexVhaBMYDhUN12Cc2RaWdvuBm9DeJpprhGzY5k1VxXX6wG71LxkzBm7kjWV",
  "key29": "2VvrHwFHgRFYb6RTYyggEDSJ9zp2jV21XvcuLVuV3gUjmRFmKpvJtqHNf3ZZbmM3kbDTAe8JMVHwj3QiWFJhCmkR",
  "key30": "4t3Np5usDamJAynP3cxA7YbaA6Hky5Cw7dP9RBpiSgin1HbvCQgisA9oQd7oU8TBJFiuPBToKcjfhmt2NYh9zEUB",
  "key31": "3Zkmofz7Tepmqnnrvs18WBasS76b4KNGyiqu3aLJVfWwuqsKEvgtqn8GypT177kYNUh1Lz8GnCcckVQBXZ8aRu8z",
  "key32": "3uueSc4wBvuF2NoSG7yAg687T5Qfw4rZa75wNs718sTkKMoPeqadr4wwU8M3BzAqToa46Vbw1wxJM5UEKCRJkh5A"
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
