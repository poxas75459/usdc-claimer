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
    "3eNsfsGwriigjWpxo4p4ocQUZkS1Bq15D37PaKqb4kbrCnayNFFrjrfFH4F3LsnLJZsuRs9HbCZwUjtHw9bPGLEe"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "uZH7a5e5zqMBaP1cNYCxE8bxSeMzgX7SLsHhMofJLu4kWSbuVBBTVgW9PYdx9wGFHaVAouNb6Ua72v2cHaDNQhH",
  "key1": "5HY39WWfsUEggT4Mr792nEyamXEYEsfLutP3eQNJbZJ1UJkyiMxstajgKzLurkzvaW6cpkmVeQv2A2sfoyc7bUg7",
  "key2": "4BW8K4G69oNGJCE5UcdAqLYPhtWAWhn6wPdetiyHz68FdgVpXWzHCBXREhywivR5MxV27F7awheMTE5vCxWSRBEJ",
  "key3": "3oQyv5qBPX4KwFXUVyS2FViYriN7FYMkWZPARwdsVpBS1tpCdPiRPin1JbNn4MQeJ9r1xpBwBntt1qa86LFEac4i",
  "key4": "2NaxSeijM3uycvCa8i1C6Uxy4YtJtwdjUuR3tpt1AU6Vy5cfSTWXnWPNm1Ar9w6Kd1z85UWz1MWJ5K4PU1xVm8oD",
  "key5": "4HUnncfbMmzD251Va9iAoGyr1eUQhvtNk3SvxKvvVwVGYUXFn3K479zxazAmvFyfKaJBYkcdGcnRSRHCh1RTmmwn",
  "key6": "L5UZTkE3aT2fYNNdcWoRiUe4iNPrE3N3BWiWDUNcRH16Fcvc4ha9aGaDL1EvAABgRBDmXUGePfnFeNJWifnNMFY",
  "key7": "3jXJsRHpEJAzeVUjzys8bb7eczNhrZ98CjLuLaFsKdBFGErEK2vz5FR4TvKFWaRaFmEE1FCymeKTkrA4fLjtmhEv",
  "key8": "4rMmYvjv4FLoSPfrLjuHzDEmCcMHKfqnyN733dFLKZo3FyRCWGz6z2PLXQNmBcz8yGqaZUbwMU51UiXkgk2YR2aX",
  "key9": "5F7W3FRkLxkh57Y6S1zxgC5gdTkiUKArrLPRYF47L9tHRRsUWHZGDNLqHjhSCWhscnwgDobgzcoiiyo1CEnnLm7y",
  "key10": "36C68nX8Qzn9nRiM8LLYyufkJ9kESa6CguwxP2MQkRVpDDgbQ16uxUXWreoMtkS9JzGSGGUhwWzSMJSEcEJe7Qgn",
  "key11": "3e85oSgCQro2cHsMiG365i6AN9cADH4z6h3y4u2BGCkhoWsezw7gTQAYEWHPZVYRG18JJRB1jrnnZV9j3i5eThRp",
  "key12": "mh8wfNHJ1W2Z1hVHedLi16t9QNe8sssCmCub8d35EdQwvAf8WhuB5KENWaamyzDesTBTHLhmVLx3c7ZEGW2ufvj",
  "key13": "4zDoCbcL8j6BkfcsD87YTKmPUD73GNVJgxaFsgcZdYuqLdyG7LSfQRHVGE6xSSkG35tx5Cbf2yhLhuKKui8hUW6F",
  "key14": "2hN3Xq6sydFnZaZFdNKfi8axaF1Pt5uGHP9hmtwjwShV6yeNMdVriGQKKg788YzUZWbiBJeNmp3AE2VT7bcLLyns",
  "key15": "66spmzaxD8Sep7qqQWDupfh5Ji5PyS9tD7qKhMVikDXiPcBLAtZdgBXpVoTnfgDc7ehAxkVv1bjL1PWJXprzJTgz",
  "key16": "5snZozBJZdX1h7MupHbozhBhqydS7zjUnsJ7UvER8uFpRHL6tioYQtyNPWrfwidVUot8oRkGhMGmWpEXQSNhzF4E",
  "key17": "5kRxafYJ8DDpaQ85jRVi3e7KioaPGjjp96Tr5vJxDp3d6p2gfvfeoLEuKZsDjof5t7hZFBsiwYYuzeJRmDKD9DZ3",
  "key18": "4uorSKwPUpnbHBuRqAc2n3sdykAwkmfAhEz7fT4uzDw1Z1Q4R3gT8jQah7GSiuY4ioaSXdM5MNCXH2wzW6wNGJuK",
  "key19": "2Ljr82T7rTSqaGUEHr2NUhagAFaeu47BBNduK4aoRB2X8RF78PbdHRxebkG8SLyhvNfNhndEevLMLAeLTm62YQEe",
  "key20": "4epUUQpHyHFH5radZdzDiV8uHS2aoZKMe7mgaVCSKFajKNQLBe9TVqZPnunqtYWSmoBNi8tfrdqnZRpiuvq5vBWo",
  "key21": "4MBH4C98gMwQxrbRzLgd7JjA4pLEzxbvkUNwNSWG1zSbMRrgNVwKGj8SBnauCZXWHtSTXmPBYcZ6bDzp3HtBCX9F",
  "key22": "52tBaZht15t5QLAMT1kDLAUgNuq7HHfS4zVDUSgKvzR4SAigxXTpzjhZRfpEvqpxSaJMzba1EPEFWeKNZ4dFoF8n",
  "key23": "491hof9cpH2zCebLVTzCjJEiZiTLdmpDepVZtgTjAZWjwjcT6ScUZeiJ2bSWm4D4uzNng24sgnh1eXwY79MgqAYi",
  "key24": "319eFhUUDYqFRQGSabwkfuzVZym89GYgMTfa6vAeVDrChryiidhoSTQeS59bZKXkCzPE7qwUTpKuhYXecpb2UoRF",
  "key25": "3tHMcLTSviEjDgHDNbA4mwzx4iTgigt8tNi8kJSgde83t85pUJpbbv3tadPca4LPgKxQDm58nYUzBPzDRmg31zP7",
  "key26": "2WDt2F3QPwhL2yEGZ4Cuv2YdWrspZzW5f1ZuN3MvTbNRRDuzFeX7ZXdB8TKHcTcnQyS5RAakuNhHsANXCUa5YBEo",
  "key27": "3nTykzovw51MDad5Dz9AjoCd19RoByfhKtRkde3KKm2YKnDxEoYuVmapRpfwK9EHfiBzcvaTMZHjtnqFrFH6wTEw",
  "key28": "3nchhQpPud594qkNd6Wz8a5LG4KxYcZFx3tSZG61wEfHo4Z8nbkDnfxZaKhA7A6zQDHEPhZoqmzaNnUDnskNHBzQ",
  "key29": "J1tAMdvcswCZiuM6c6AwoDVPDfpeqThSiwsNaZEf1vdGjQUz6ZCTtxS2wjgN9F4kThPR69ytrY2SWSaVuuXU1yv",
  "key30": "4bRyTUcyfi8y6DDYxA3wb6ZHrAGfoJBZvPxvDm13rfBoeZ3MCb18tFZANgYeTDivsPVp4emNkYvGsC8MpfMMMo4R",
  "key31": "7j8cbpe3kmrtnhrCtkvekLwwSU2LGE6q8tjgB3NN8RNcPeE2LzPrEPHvz6H9xbas2V9fzkRShzEWwnZgp2LqLq3",
  "key32": "49a76KLQW8gK1Luu6dSwvfVeMLUZHPprUtFqfsCWoV3SgEL59dzK2d4WRTBmKwm3XcvJYFjZ6pUTzL1VeDs8s4Ah",
  "key33": "3ecWDZVHAKpn7xMVpuxsoDcd8zpM6iZZx7BeMJ8QWzCQpQ38vug3Qa2uBUQ292d8MvE53n1L7DYWHdyJ35KQWFmc"
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
