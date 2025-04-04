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
    "3JrDurPGypWN8hHtHDxFKEv6KX6WqRWyCiyWeXQGTu82719z2tfkeocMLCiqepH8pzkf2F8gm5juyV5pvnTMnsxy"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5nqbB6qbqzTteuqHvv2Z8LxcYED3vLG5mC6ez76NU4pwB4Vno7Ebp5oMX2SbP3cncbonxH8LYstoVfvPc5N4PUxF",
  "key1": "4YiDTxZDTd7rTuiz9fANurGKiRfW7epmp3hY86K138pRrvVfDqfG1Yqapj6fmVou2Gh7JoJ4jq4yVQ3CWM5EFMuh",
  "key2": "p7PftzmrYQ7HUzjB9ZVUpCv7rYU8VWnii9iXfnMzX2gXYAqkcfRBJq5bSpT2Qtp23CXcm121actY8gHLgastVnc",
  "key3": "2oqLGtd7yYxFNc16J9zydKgvUWsSi7PChFFJsGGVgytkMcmQAKNrnK9TcwXGLKsn4LkF4oUB3GAxXtwNtCS1qdVw",
  "key4": "2uZmN5ynopXPPbFqYxUND5YyHSWWdADqx1yAwHhsJMKoKrDBVnAsVQTJLuJCoTs48LYYCUDcGNwRWgXbLAWRJWdZ",
  "key5": "66E9JUAZPtowBkg6XNRpMwdx52zZAb1KvZZN475bCMCmJESH5GLzJZHgMgTweFCdsy1Lk1at6g6kp6MMKPukDbqg",
  "key6": "5K6fkQKyey9ZTXHLncuFkWKhSgpmfCG6eRth4SLi66EDsVxiJDSqLnb4gMwbjoA8Bw4d4mCWMLSF7uBknguVs1mo",
  "key7": "49sUN3aWc7jjWXqMZRBkHjHhsQaaRZTZPZPYj4zV86CNpWmvtfFoKoiFbjmTexmiyTLg9Y83gqbaNqHBadyqGmd3",
  "key8": "HMot6dmtfLyyuYZGRWoYdxRhM4fNGcCuvzu28MEkQwKgSacuyeTKXHsyF2C6wfURkAVe7HM7giBobujTW2yWvUq",
  "key9": "3pVdoD5pVemCbYC1LWHjb2XaCVESuXxtBCLYUTzaV7TZRopZXCEnb5uSdqRXrcmaQxRWdijoAom7ijEy5ngcHxPG",
  "key10": "3zhbZy3ayP1xJCsofJmtqk4onLSngfbXgzjnYkkuN3RsZt1NqWJq5BxEPrpBBFWkZjkfkwLmtxo1EiQd5jgWHLjT",
  "key11": "3WhS9AMNYtVeDnk7eT6PNVm393pghmpDwnvTU1YvKhUTdPUNievTsXF8UJ68HJXg494VBAxtpRZQPuzb7XxduVm7",
  "key12": "58E65taxYBnT8n2pTrkvAUzMuT5DKUMnr126b9aFffktKzr291EykcqjAGc48VS55xApjQqckcLgkmXCdWKCuXX1",
  "key13": "5x5NQ6nwG1kwxpbxsEGFZj8QigG5E8HMdPY4RLrtuAM8YqH7TM75NVzFMLdDS3Djmf3Uh32CTDYWPLPmmr1svU4e",
  "key14": "P1TYX4hqeTuxX3GVnP7eEfb2VbVHVQXRipCdVCwJ8NRWmRg3ymgKeZsUHbm6VbW3k2MLezL5QgPoFcxZ21F9hQ2",
  "key15": "4nky3t5tPkGsdmY7avmn6XWPCh7a6KRt55cqcxHGUxev9h7MdWrQgdhCtjnCuMa5fEjzvRLpcJk3bbLeRWt5iq8a",
  "key16": "FWdnA892qa19NFi2GnyG6u9YsMiPVJRJTyVhLqaTUAHb44hF4AEo23rDxXkcD8D7ddzEcns9zNRZJn7Xyp9Ahbm",
  "key17": "4Vnm8hru6T2C6CSQaARpnDN5xoB3ScctmxCv6A8Mhh4SqmSc94ZuBNNEfmZ7fPgVgxdJmXTCissyeLxm3PFL6ZWa",
  "key18": "4inav6YzRmvb2tnmmqfKvozB5KyaoJ1qyHE767MHoVUKbG4skK3nH2LfTDEAR4HdqMxA6bkMznKafwqorqXKAqkn",
  "key19": "5KQzmFmSdSzH9WVEL6gp6XXGqcJ4Y1xxW7LWp37gYZUox7gnJfLwNWzZCdbKByvMReUqt5XSW33noLaqCufmMU5T",
  "key20": "3JiS5fW5Lqde15fokUejikioZ5GQ88RssbHEdc9D3mvEWfzbfqVSsadvBKACjAv65Z8exNqsXYRXRsY2A94gBo94",
  "key21": "42HbctoR44HN65Fnv3eZA2uhG1Qoauk6KXxJHMBWYjYQk4WQEV33nbGyrgoL5QNg9oo4FCkr9pMdBMwT7iP3zrvN",
  "key22": "Nz75Fmb1AkMwrVznAWUyZLrYRHwaH67VyxM1ArRSLp4Aiwfi6zKT8YU7bNLPjkabVLPjkGePzGXS5nUrNS86Kmh",
  "key23": "2xxoWCpsHRjtGLcVkgJ56bc9wGM6DGSCwodknphqm23ZtBqKk4Jurm5NSUfW4uRgKfxmK4NJD91PVZXRMFLhhuP2",
  "key24": "37znGf7Af9RMNNaCEppVLFnbTDmzhoif7xwbB86wFU4xD8DbSd3zKkP6M3bBX65XFV6pASipoum86HHNpmaaCVi2",
  "key25": "2RexbeA7z4Yg2YjSikFC483qK3dkxU6syHifHyZA7uKHQFGn2BLpiWxsKiGt3MbxsSmvLdMuoTQ26gquCYufEurp",
  "key26": "3JY8qUEk14vbL1uFQHgD7mR9nFPjKp4xFhJkRf9R83prHmQQZR5GNsaJ4Q5aaLU4NkS7Ub7Pxqx7XpHfwxPnXiSj",
  "key27": "3pbfp1M78k3EuZwzqJ1Vu5FvgPNz2hGXa74j5ssEn3uCmMbex22DFDSsBwpVSeCt4LfLfPu7EmXS2uPP1bu8rxPv",
  "key28": "2mAd3ZKpcjqiMphzgW14RQFtBmHgnVNzEYUj6wXTsSHHuyHbKHJmwDYkYHKj5Y6tYyWLo8h2CHcFsikeWMFKmX2S",
  "key29": "3JBGoYHCZjb2muFvo6Rhuf3jbCgbeAMDKtBzgyC6TE3gjrCT8TUn5LYsYLXpMRUHFh7mopAfSVJGbXrSdeoyDWgk",
  "key30": "2oaLgNjA2LC27SmHABYuzJuTTuGHun3ie8WFXDnGiDnbmBwC2HzCiruRYecfcenavnU777gANkXzQjiZTgJ9Fwqy",
  "key31": "489sRcm9HynyJGAxpkDSSmGsqgimJf6M42jsfpSVu18ixXZtqxvmRZ9Xg1EQPvFeDXZihinAy8mx1qWvRi7D8XfQ",
  "key32": "tLUQsTYt9B8hS8RksPMrM31jj8jZCQUUfP86kNTsCWy66hY72AxJudRzurPRpdhyDa5HuYKvBB3uf4bUgefEqVF",
  "key33": "56LfW6oFAj2k44xSXJ1SQ5DmxCCGE32x2hN4E7JfX5bs6aKSRUXAudky1pEGPCP22AbkmHdg21f1ysfFq5cCR55r",
  "key34": "4kFjutQCdkRErxDxcMRM7z9v3thFdTQQ8Ly6oghbBJxyjHQFToPzNikTXnRgzRuHkMZA1mf3kcgaQPUzRWTGUQ1y",
  "key35": "4z8finCpjF2vqq9LmdyXzTKi6uY53LBiJ9MWiwpUJ13hsuN1pV6AmhyGFGARuuwXnDCcEJZ6upEYcub16U6AiXLH",
  "key36": "4XRK2XK7EUPwHCQJHFkEGkN7p2vuFT4xrLuiFA1zeT98yLa9fDrfybvg85itnxfBJ56e6F1v5LgeunJZUEar63qb",
  "key37": "3dmWueUWAHhGybVYEPg3WCH99ksCZfvkMGukUJHHrCeNchduN2PpgPuRXWAZ4bJPSViLA68vaFh4KhkJdpEoT3Bw",
  "key38": "3u1p9aAenbzngMUrmM6rjL5PYcYZptWEezkqLeajvmDeh8SMf3MwRm8rbkQJyXiXx6VRv1dyDbfxzVSZTXj3umU",
  "key39": "EFRFZr2qSJCqFshy1vFjH6d75PnyR9xdpiC23F2QGpmhtq15YdKsEN2LY4Kv8rrnD6URyzyhyRMmCnHGneXsKee",
  "key40": "4axjg9CJUyvwbv8SMgAyhoAvZM1rmcrtLcrZ8K62DwJPvErunmH7dz3pDCcmy1icAmnwZj3XakNWay6U8GtC2E6P",
  "key41": "yZcyQgwUWtCrUc1VpK53nt37myJzKucFzb1zZu6JizkV7HKan8yJAA19LDCL4epESgbQNbqQqxAx2a3Z5Ktxav4",
  "key42": "5sjzCJ8YxxKHvYYxGij9mK7YcsS9cVchdUHVd36G9M1bUQVBqA3xmu47GApn5UFG2EA2HdiidkhRASgFh31xtXou",
  "key43": "2nYioYHSQt9FVJ2nEuvxtJxM5bK5YU7JJuEHNyrUQVmuZnJgaWrf1v4rnNUPbAN4WzuwSNP3EwnfYKceb8e5G4BR",
  "key44": "2strMWLYMd47YNGbbGNYG8m7JMdLTac2CW4LgPnyTSskcSn6j3z7Nyw5eEzuNftAB3aocdHEZNNeqoExnp6afKjt",
  "key45": "4SoSTuMcRXCMCL1pTZkA1sPC85hZ5CTPeZ7dC4AtEjZBYwaJS27BMK4utxb7zpuEFPPvUq2YzEuLG1hLixuM4Rpm"
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
