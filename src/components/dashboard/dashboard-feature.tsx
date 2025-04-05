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
    "5ZskT7kCm95HCK49x7FoaxQ2xpumXcMnVjh2G7UpHMf7BzCjYotDudhbhN5XGkT1U3Y8M1yaGRye9JXCkoRwVEQZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2BB3dZihs5RUWAJNR6CUhpoShwU3csCMY6yUEW5my5d1UTTdz7aw6tAxkaVC5T6CBN1FpBSzh1L3p7fYS9Va5Qb3",
  "key1": "5qCtMjUk6GkJvZw9g75XV5Ssqj8naQcc3DLZ3U1M1LJ1B9EBDiXgpEKosiMHxnEpTjxzQ3VAKi8fNDeH9NfCbkCn",
  "key2": "2Eh79BHwzkHPZMzqYQbRDjwAYC1ZVd6VkTVQoH7dLcViwznQ8QYGHLzmjn4p6tsiDyJ3E92LDHp1wwAjYfRovXno",
  "key3": "42aaxuuiwc7Qe4EUyd1ZqPMkqYJ4cymwPqzbUFREnaEo4UxeihgxzwHCdhujQTg1x31Uh8HyF8B8npphCQwqsdXp",
  "key4": "2xCe8uh7BVoPo9PHoFYn4vfPAT4d14zfAo2xAUBzjmA8WsZSWvZWLRFmj53Txqye4ZVPbQZbKfHSTg4DeTzWxQGC",
  "key5": "BqN7kdafFV6vpMMGiGTu2921tBaB5K144iQgFpUZUv6D9zwh8WchAP5jTE667FBb61X1awGrPNDuYJVWoJKCgig",
  "key6": "vKnFY3t1ZA514RSKM9bWbGMoenu6dwpLyjcqPyvWSrgooM9U4mCLzoetG5gUkKkPZaNePHs28xymwgYHsuXBE85",
  "key7": "4qQL12k1o5t5TsQ7YJgMUQ12oAcQS2D4NMw2Hq8JeCTG8sYLyZr447RXaXCrWGmRPaqvwRfLBpRBTUSTuZDRUAxK",
  "key8": "2W1hFgV5BY38vx8M727LsyvVyim4Y4yePayZudSWucRGEm18SQDgXVM1pMCs9hTkhozZv7zbgTfusYo1CuMzY1EF",
  "key9": "39zUkjSb65tCcWbvkNMxvB3zvrzr8HsG4RbrmA13XjfwFEZcHwK6qqWufpD3CyUX25xrGDfuPRGnUvcsDyWLsZA7",
  "key10": "5RqzeuLWMRaoJ8wUVmZJ1qZMfMLUeVcBRC5rSJKJef7oaV4SC8ALqpt2vd4Wjf1TSidLN2X9jf6p9whgtibSPWTa",
  "key11": "3HVxUzgh2XscrFFA3F2a2Tq2Fn1Xuj5stY4d6CbJaqRvRHzq3Qu8USrECyysrLuArTuW87SLiPqcY64yU5VTijRR",
  "key12": "33QGqoTWHYjz7nTzeaPtyaz1R5jtPrePCmhP87gxjEovivWCmvCLcAF2dYsATqSvp8KfXLzKYTX5ov9jt5LyFEtm",
  "key13": "5PQgwUwn4YRsuLdrRgqG4LdK6NFqKeVbdB9r3cBnDQm8YzXzvLd2BHHhjCaEtoY54djLoCpswbvxkLLqG1jZRFf2",
  "key14": "jsdbuFaxGZtpyb2NBqvTDVrkt2NPSAXaEpJGnhG9Y7Hm96BoYQNJNQrbzLwyjryfYz7uKibDESx751wXe1dFqWr",
  "key15": "4qcJPK3ftbf1e8gZJ7RvNGAMhbfj18AHWW94QxH51qeZTBFnNpsLGS8eBTBr5FJnGRu98eww6ZN8X1eLZpkHR1HA",
  "key16": "f7fw1VfBVivRzsrBmCBxQA6GqS2vo1Cdf4LhscueKHfnjbQBqxe4FV32GnymzV2KSfycd2PfqmDs5eJCK99Wh37",
  "key17": "4trJznn4Rn4NussZAdYnt6z4Cz7Dr57zoQh92ZwaJ4P7HyTxyvLyjKBsppCUtifiwy4iBERTZqh8muoPvcSx7kK",
  "key18": "3ELbfj5ASScuhJihWA9knJHNSgDmxCqG1RBcNoouGazmb5C8d56WdieQMsbpKkyU97h2nsQgJhnHqmov21rFNqHH",
  "key19": "3tNyxoWGQVaXy4Df4rLUAR9ytFniB5qhiqzSAbJDzaQjkKGayQLEZkjoQapjePjNMbSEQhWy7YivCvJDaqFWhrzj",
  "key20": "33ie1acBtzhh5k6mkhAbTLqVBVHeFGBc7vqQ5gbY8hsQwFsDCdRqYi5EQfbiPkiYsi4hs4zNTXMnkYLTsUfbRn6s",
  "key21": "4SjdHMJug8YfJGSMnbehxxBijvcw4MyoUDspx5RYcqTZPB2Y578jFW2hVeAzBE4GGL27R8EmhjyTmux6aoAUqkcy",
  "key22": "aAWR8zQhtvhPHobgUfUiECFEYVWH9K8auZBzscoSkPPgd6EsK6heLAc819a6ztpHxYfxCGCWAHfy9CzMpP6HkqT",
  "key23": "5B3vcuUrrnPSrFDn8wSkDMXXZyGhEvNVPz9RJiMZi1N79shS1gdhGfi8aNfGQsEDDCQKuHgYEP6UxuYdsFedoV6v",
  "key24": "5ZymiCAr5zCYbBWUzBLZGjCVpxArwBnpNuvFUxoPav8vjAv8of2XUUFt1dm2F6HsjgEn2bt7qs5g7GbYpPoWDHqs",
  "key25": "CyTQkWC61vyckdRsF7s5jyiPa3VrpbvqNaAypXMCPcDdQhZqBeh6oy3cYnM9AozKkfY2tfgUm1K2uT8hzQC4Byx",
  "key26": "4wDnKXCyZ9f22FnMkb1St68pGehd8XncRsqRCoRH5Co5fPh861yoHtEvuhcDwSt82omJXP8Bx9rHDVVhiAq9T5sL",
  "key27": "26hwB8SWBNEg3pAk84RGLYzpeXUPoW9i1DeSUUs3ctH7W4AAWFLN8rg3Pyh2Qk2x8Ep28cYeQjV5ZiCbfCth3ZVQ",
  "key28": "3DNNbT994ZBYqZyCgfFtrnCHYkUyYTcZ9nCLCT79mmwcu87Dm2KjpNW5LuvVrcwzGoLCsbNUZxekQV7ehJaWVpJn",
  "key29": "LJFiEK22ryggmSkFcBQMxsqQ7jRtb4sH5nb9seWG6jJ6dN1tmekP3N2FeV1E7JRXiVPQmp1o3o3DEMp8YKTgbdW",
  "key30": "2yFvhA6i58PEv35NcJ1exSizeSfojneUJro55QshXVkp1dT2161mRtURtKwvALsDgzmHoHTQQTY6hoCUtzCE5Hyn",
  "key31": "2ysKxsLvp3SoYXSQ1CGtUmvckrBj42mxRUZvoUN5bhbztZh43zoW5qgC2mVTNd2Jwa4YvzPRja25nRo9oKiU6EVr",
  "key32": "2UtDSy4HaaCnqN1g2sA6JxjJJLCJnRMP5kXaxijkxWx5gf13hDrdkEUZTGTu1aMhQroCehRrubGJBU4Qdy9iWYW8",
  "key33": "yt1GQUwEqzezBAzzqMdBsPjzkU3LGKPng6CGuyeG2Mk9Phxm2CG1W9dmw4tS9u5VNCYu8TtzW7MaGzKVom2eor9"
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
