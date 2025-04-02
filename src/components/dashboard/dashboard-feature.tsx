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
    "4XErSz5DbPJZj3fpf4D3i1htpjJfwLNDXeyoJiPB2MvRpEuVvh7BhPxL26kWRYPRE2X2W522PxkSb3fnxDD2uxSG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5HTyxZ2uPrNUmp2goKbofujgVfK8XvR3S3j6EfFqPVPUS4xeJWxiXH8bHR7CK2a1cA4iNaUcxQr9L96VJu138ebY",
  "key1": "3Nz3nJvQ8zKMp3avcZR8mvqBHH4V64ux9GwaUuWtoZoE959atiYoc2a552ypv69MPX51npyPBTWBC3wbiYqrfniB",
  "key2": "5mnWDyhSxZbMLQNYmATjNonz8r38NagraXhXbz2aSegpn7LhNS75Cb5f2iZsu9aQo6dtdPy6Bgb9kdfFX2DV9amr",
  "key3": "2VQ3wx23ikeovXd87B4g4oGPuAvqWN68satGBncsQkZQYd6SBMcy3EXniDPHCDgnQaarJvWZ4xXeGRoDqqrqwtAG",
  "key4": "2bUcyLzAMws2NbdgDGCEjere1KB4rmEDH7H47raWTbh34vSiDgCdMK9sriT1Smvi2sutA1TPdg8Ca2cGH9Y6saj4",
  "key5": "2RLaCZZ5oJkx13XvLFH8TW5tFjwcRFjDAvXVFZoacWHVz5LUSArx8MDTBSFaeQu6UB2KQ9mN5USPeHNHCLf2WtPB",
  "key6": "4WwYpS8V53aLZYP9gG9xjHcsH8WZc2KfvQWgYLEfmaifeKrsqwZ7Ne65LUfeaPy5x6qgZQnG5R7XhSU2vRNApkZq",
  "key7": "2MsyiKrubHduyQjiYJNk4xvj1EBUweet9gbE3L8MppxV8skBYTNjhPumTY5earXMWsrbJmLLde7VifZnaQSKArGc",
  "key8": "3pav4Kh4vPwi46i9d67jSRAzxVcjxNEbBU9QmdWxd7aA8C7VXs79ZYP9h7sm8UcqYhDc1j5VQBF9dY2c4dDrafd2",
  "key9": "5Ryw3teEXEujj6oictGcUhhfqCbu7V9rAJcE1eB3aERsENrzX797S1sD8bBSJxTzPZCJw87ainLoSJinySZhpFGS",
  "key10": "2Cw4SjnCLjPpXk36ayhSBt6C5L5nvdVTQf7n6NNU9oSHtnMhWM9RfWFipnQ4Mujta2bvNnYkRFsQq3pJVssFAUeM",
  "key11": "4ZzGvBcW76bqRGi9NY2Fyi5ahkK6HAfipo6JtKDKyPCa9PzGrbV61KLXRZzVP6z2ZkbXFNBd8hanfqHqa6U7BQKy",
  "key12": "4KcKaFFhMGndLB188qdmtRzvzsVcyFYHKDBYhw5dBdavMVctTXS9LhzjbSLLdxR4ofxNsuQ4MVQfDJ5rnJRrzLV8",
  "key13": "a1zGBovUSX45swciqKB4CUZzMQdPpHDmBdp5Fr9EpHk3NvP3dnUR8kVsWJTVdGgexpS2BgRUCVzKzEC33Pgbfww",
  "key14": "2mjVpTThJkDvxkzQhYXKNPxFkYLmAADBu9W4E3dczqQmx12wEfjPddmVDbofvzaPmZAGEbv6Sa9NUsGuqs197bW9",
  "key15": "2DPYpRUof5Qf3eh2M68khsUHehHHKZBKrVAcvUgvnKR88RVg2Xq8HHNj22hoEVU2gXedGMDDSGucwkQscxmwaDMA",
  "key16": "TpBdcpno8kL8Dm4XBLpYWNVbxtBe9ZXymYPrbrr1DFz9SiZnVcehAVavCUhreN4uroUYWP8eYpt4Bx3pyfrmd8j",
  "key17": "5KSk1S8p67Lx7eAeuwdGiD4toJMp8YYA1HKYXRSRSr5TqkNbEyhZMzwtpdTPAQ8csngq1tQuSSYz7TUFRRnkCX69",
  "key18": "ySTFvPPs5ZbtvbdYM1imX5QvQ62zEvgJHiUMyUFx92ZeoMtnFbPCeP7EsAp2uSKTxVSAQy3QRUbZ3gnbCuiUfdN",
  "key19": "tYprX7NsUpgcfdCCKv9Rf5uhYY1M2sFuVrEEGmZBDJXdF14VSHT3KYv1E34EtL9B1G9RgxbNiU5wzE2qDGUbopL",
  "key20": "2VSiauZMR8J9TSU3PAjYM6zGXYgKDnPkVvTmLZXihxWGCArqm5qyeSyYprGpqEM92mL1HN3nkGQ1GY7rMgbagKiS",
  "key21": "UftMKoNLPSYkSoDmisbC4J62GNFQ8HcodmTirWcepkN79TiS6wz4HmFV7iJeskUDAvfYTz8i7Wk4gWzkLgSJ1dq",
  "key22": "44FjQGJQJq5J2EJ2PFcqxxYttjTLq1E2xbMQQJZ4A1KGodMAMoYPBJ3DUtTCyoj9txEDQshL8rtWu4oxDZzsD9N3",
  "key23": "5w9HfXy3BAPvQHNFWdhKaSTagbcHaBDpcfh4VVNwCfD2bWh5Gosi7u2VNvdGJG5QHHxMhXurisBdQeyEQ3dZ1gD",
  "key24": "4zdp7H3PRVBdXS2i2snVVmcWNHf2kfP2JcNYcJE76Lw7mzYTEd7fiDXvifXJXk9DHGysZWWVXY5y7uShhkFwRavu",
  "key25": "n7Hg7TJpdLzSWWUPP4yAz88BiyuFV1Mcfhv9A195HnLseaptxtn8vgaSUhUx6Q6U3FNpkxgN9o7DHE4Ci3DzrWy",
  "key26": "5odgrdzwFuohGS4nQ3wAVzZjhdvoEeLFizXdc1iZcohESXp4hWE9fFGLhkc3Vf7nKnNdWqcBakDCMAz3nMrZ42K9",
  "key27": "3KsdjiDVp6y4SyspuUk7PfwSMgLDprfdjpxZbQt881TT582SvkpXZz17direnmGBdUYXmREqjYb2ERqrSPP66ysQ",
  "key28": "5MQMc6eX18p4nbYKSsnCs774T3hNSd2DUNsRjYaAFTtYGQ8dM92TAuUbU7fKoLzCkZxmYeEtH8MJJ2LT1bM38HuE",
  "key29": "3rriosNqyJfNkuPrsqrJNzYjWsDYfdpinwgjKMdA2ybYTRtt4nyF2BnjZdPC6AnQp5m4yzRWmWVyXNZfXpmAvxdK",
  "key30": "4Y7KmibvYTNcBabfZTT7soeDfgV5uJCebWjadsmUKzLdTm6tGvo62hUwPCq33PiokeDEMbmfRMmgtvVuXtnunzbe",
  "key31": "5eSRoT3s3fUFPFLjQcDsoJArYsVLhZ7QiyoiVAwyMp55DjeBC3WQ2brEvwy8HqWyKxSRMxEwxAtUyxdeswDNiDgV",
  "key32": "2WXFuTXmJLEthiRVuc25t23PfcFCwtMUmmkD9T9yEnzWwYWCWjjmxVE3LzkNQS5K7kg2swfViiezVGHhEyB44XKX",
  "key33": "TF8AYEcbycap8S99YHsAiuM6rf3LycjUzja9uPNJcib6j1D6SVyAe9kRQNPcXBNuTSQR6NBENAKfVrj6giarxsn",
  "key34": "4Zf4z28t1h2QVpK7gChLzDcYYuFXtQJhFaDKizFzvoYWMZpvwkyejwoT8hfnB1aMyxJ1PpWAf4TTr192qbXP2WE7",
  "key35": "5zxxKnBbMatbfq2zpRTU6KMkVJ46uUZNSNkaLnLCAJw8WhmeaoUaJncWMx9Phr66fPrsLGfsnMdDuxZgr6yUXokD",
  "key36": "4CK7KPufwDVVkAtCkAxC3Qiar7GZNT13XEVctPhGVA3V3EVhjYs9dEPknbtvqxQcwZgt622ZCmZxco5HUTuSLwMz",
  "key37": "zf9chTf9Uquo6JVmH652niXdjYgTgsVzyQUm9vdZJJtaASrVvhN37pECqmLazVkEvt9UdQSVRYxa6TwNbQdgtum",
  "key38": "4wX11BwjmPoAnaGaNicSkMrm7Q2U34HVNKUEGGmaUFBmLvJKnse26fkLFp1ixbQhz9oRyvDhgk8Leic2GgzMhzvw",
  "key39": "46NvYA8ZKAcDqa8eNkabApok8rTqnYa1aJDHF7oNr76cvZX3rsHXq4urko8mbZRVwiYc7fW3hrZekL6MEtR56r1X",
  "key40": "iA1XMsvC431n5iQtJt9bms836KnWdje9gNEvearTodf1yAp6BYyWDNS1fjsLaVPjmLb7Z1wRjcepr7jAkVuEefW",
  "key41": "4XQM1BUUFXfMuBV81GV3LsyRq9fUXva9w5RXBDdJdwF743jpaXUXcK24NnQaG2hso3WtctedYzqddrxTAAZEgWSU"
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
