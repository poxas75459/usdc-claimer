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
    "4Be6HdbT64A95pz8xND7St2bew2BMM9NorRimBXcvfLv8VMY9je6rkoRwF4e2dErgaptwRuXK3ajzuwvdtE872oL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3BuNVxSq1VHdFiyooq8gyqv5AqGpawehTuLuYhJf9svY994c53rsy9f17fMKmwFB5paYkG7HTWCpBqU5Cyt1ysFX",
  "key1": "5e7QTv6WCdr6mHwomTEUZpU9aeBFzsafMjWGeTCDaYY4SxbLeeETDmVfs4DGvwo5xWr1B7fjAEGM43vhsW9vmLEK",
  "key2": "3pQBXgu8Qnr717FFQhqz4ArLikEn4droTXStN7Vpv5C8dHTtyoJ3ca3ThVVPVWHtaCHA9h181yYoHiSEUHJqCVb5",
  "key3": "4uYZzbSC5wDm2ja647t4wed39oDDF8xTHLFwDojRPvF2JNRnNVMdLsqMW5susk4jTySw7z2ZTsnSyNJyTYp8759r",
  "key4": "3jWSAf1VThvhvPreaU5GQaVpMVzAiWeYU666n38RKDwwaBdBkB7J7TDDKnBQeAQQ8GUCRUYFYSpWPGriFToJvirY",
  "key5": "37m8cVh9hqDaq2JZttEV7gn6XfTNDAP2M6ujUSUdJz6qB273JmDkgPgmWTzoYyLnUPzJE9F9FUZsM4aWsgUMNwsk",
  "key6": "5xBmX8WTogMLZB7iUVQ7u3kXhTUqXSpWNFoBfZXqgbJXj4EVH7uoDzxf3GZShG8WooaurXU6hwxnD68KELofGrqQ",
  "key7": "2618WEk59TLYFGDxCu7EEDwJf4jsZbjaFfAKtozgN9nauo1nwhWF56oQW6w2GeDGfBpSua3irzkwjKtM8aQdyN8W",
  "key8": "GcfYqmnppXwaSLvCpDxibLF4pew2DkdCRrwuG7TsVhEJhQCot52is4vAuaLM9gvsXk9W4yMVNnN68hJahXasHDJ",
  "key9": "3n7qCbDG2vEQJzmTzwXSGMAgMWJrmyGYT39Up2drkingRMG7swDcRn27i6psrE1ySy5HUu29QeYYDBpKBJ3KNM6b",
  "key10": "2XYzxQGi3xjbb4gCzjXWCzsVoP9eYXrvykeUb1kvRdgvm3DwNybSdUWpMLfvPFW3fSzY6A41U4FpDSadSiLvqguK",
  "key11": "5Hb3619enCxjG3gvLvF5bFCMAC4K5Bmnc6LQSrfAGNHYAie2ggL3Rjdxrm8rd45ARf6CZREBUC7etc1q3HZPA9Tz",
  "key12": "XD4LcLgZudgZDTwpzRNc94MoX7SK4kpYifbf71FVpHym9iiU2e2Q9mdd7kZxvDQybhedd7hHY4ABE6EQkTNLq7E",
  "key13": "4QaVweH3enyUPwrtTD2fwcFGzdXAZdaKixKi3nikG7o2va8hZ8JdjT933sbrDT2oCxJQ4fNG7kejn96Zgcm2qxtb",
  "key14": "2voMqK3VcRihzKagpfnUs2dT4VUfgb3Bh5SyTtUj2myoUDi827BWZUCZsUd3xxLKH5cRQLgFa5asTo1rhAbPkd5m",
  "key15": "4i3Pa1SeQdLzfDzu7ZDMvkoVeALCVvZ98FEtGhqLPK4dezBGATFBFvkEnGpPBiKewmReU7TCZpPTqM4SELSTVRMv",
  "key16": "3egCC7xqR1QeBVAFvRjZiptAXHJAhSz9oGcthQDXDYV5fvsJ78rU6rPMyncdKaUWqKGvnQfn4MrUM5eBBBrrVokj",
  "key17": "u3s6SkS8a3jkosinqQ8apT8hq9fQ83R7VGcmAnqfrj7oiepaag1EphcPt4x5ZkJA4kN6XUQg4BacpyRW2957rtg",
  "key18": "65bibQz8axtQtrQ5dRSq7cEM85xcy6MbESgqXQJRUsJHyaoR1iaoUPL6vamA5yZU5LESQKBBjahDaPmwENKMV8cB",
  "key19": "3Vd5WXn4PYxWe6ii6uTX3PwoiKa4YawZVUypSQ23DypsBN61ZoKw4j2bBcmA61mk6qqS2DxyiqUnShMaySdPdJf7",
  "key20": "mYUCFa5z53j9ZrELWLLdPV1piHA9Kd3zDX7g8d9fCYXAQhx8ERRTdXF61VwWLCCywE2YYLiPXP7zBWmusdBX3SM",
  "key21": "4371tEXAepXCGmR1SNKbBFm4yhw2SH4sW5mpf6AdsirrbPWv14oScTkYsBauwVU2RBB6JDtqRGm4PhsBAvvBYD2a",
  "key22": "4cswCVFKrpKLQqRCe5gMUmHzaXtokYj6x2G6tQ6TF14z4SGURmv9yRKGWysQhQaFtQHCdbrK4cLAiDS8ikNQigLQ",
  "key23": "4HpE76iJwzi1QH7cgBH2bYave7HCRfjL8jxAJCe4CBtXZLA7fkgzQmaAemkwvy5WPf8iyQPxH2UKLY4o7k4Fn9rh",
  "key24": "3UYAHDaH6e2rhhf3qv8TpDRZ7WqzJDdSGbskFwzitcM7jz4qyTfY9neaKURgGWWP6vrSA2WqdfZtWkCZG9rGXgou",
  "key25": "c5mwS7bQupxbR2234YfXJ5bt5DGsy12PeYMt5v7VaexqBBTDB4t79LWQ3Rbmdydm4Z2hCnmVhtkYXPp2hWuT17R",
  "key26": "9jp7K23QmG3pMzNuSqsVYSvcJwKHc2vakKjXVsL6vXo79tNcoCDH6XcbRjgKLpEhCssNzUf8ymP1jXpz1VPU29a",
  "key27": "ympZWxQmkVvr94rZHSs5tWuEfvphbwrxdspMTf6RDjvYhvpJ49eYrqzM5nNhdRKou8vLSMTFnHn3rPk7oSasPu3",
  "key28": "w38Paf1jBRhT8GN4PTr2tBNgSenMwjfapyAvYARMyyJAMtDgS5KuWpvhreDiRK2FBVZbdgA7AY3KSHsKNJa3jRf",
  "key29": "spvENLWwnQq2pC4navyq8DenLYjet3XKNLK1Br29JgFwqwgdF5kAY2eByGzuerSobv3rP3EaHAsfiugNNhJnkRK",
  "key30": "2n7yZicfhMLuyNPYah8WLRRySrur9owMS6reicHxPpn96LMRiXjgkpTgrddCwU5G5wJQXryZdC15WjJ5b7ijEXyz",
  "key31": "2F58JHarrGo1KoTUR1KS3yJRNRGB8URUGArPiC7J5KbA7cHci5sMoa16DnVqKGQppb9QvLtQxwR5egq8gmcLE2vk",
  "key32": "3CpUKBPWG2mbiCa4NTgU8egoYejZ7v5Tx4uzLKCRfZx5xtbbC8AR7UP625qK2vXyTbh2K547u7nY7rLfWXYqWByN",
  "key33": "3GZUV1vFiXGy6Mc227AJAMF1t6DozneTTHGjshjEodfx3B9TJ4TwJykTJFaPESWw1UwVvKS59uo5pAbPZcnPNnvC",
  "key34": "3ioy1YoeGgrWBNGusfcvM3YW1qMwg9ebvrBhbXJ9edozeTJuHYWTagpqgYMG1r1UoWbKbTJfYiuD8HXEmF4Z2Nnm",
  "key35": "2aeP2MK1oZiepRL8ee1zvLY7w11srBip2wB2C8NtqBEhuAydswscjaWn1KdeYpvFVbB3P5p5epFgRP4ktq95eKuy",
  "key36": "22Ffvt5rMn8fqD7sRGGktxB5g1BvZYRQbMwSdbuT2JDT4U51fA9w9LRRCNisqkQbXTu3n9aTo5Sugm4dbDRyGw5F",
  "key37": "pmCpjDABmTXXEg8FZqaaSfpfvkEMmGuZFg18aswSeE9Cbsycc1JWbxjFpKCRuqvFya7Re3eX156Y2BwNJ1ctPw3",
  "key38": "3KiUgjGon2BCtNzPB4KUEnQHRGGDfM5yqNG99mBmeTjKyGTFeX3AvfVmdhxdYnjGBftC733ovBh7b5wx71ZUnNy2"
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
