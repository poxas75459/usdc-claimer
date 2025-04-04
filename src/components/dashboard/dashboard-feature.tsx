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
    "YD6qn9gwvdy38HmK1rj7bk6ZGXn8gdHAN55fdHYxGqFFYsJBqTWDzcWokJx8TKR2VGZ4ayvUnEecfxMcMJGrwPT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "42Z53yDkHgxjAwaL1vKY2FfVxvoJ1wVFnBPx86wVwkcGHMGD27JDGcWHMfj8MmxNaNzsZ7CDSUPMuHJz5D5E6HhX",
  "key1": "3j8teN5vESoPHvHKiWWbydeLq2wXz3gccVSzQgqcfbVZ4yXsZro1jc4Nez3F42MYdt3huFz7JGsLSHoQ7orf9vpt",
  "key2": "3rTcMKHWMVm2sTBxAVSZHUjf3rWv9cG2txRHpuCBxYXbT7qM42JytvcGC8dkLCGS93MEnXZdG1r7fxTMJUBguKsD",
  "key3": "23oz5tLUUGQNT2myRU53RrakvwKFMBPiXCEV2qDcT6HPist5ps6xGBw2x9LP3nqR397mzJoiFAHJpZ2BtmdPQYFi",
  "key4": "L9c5kA1ZB5G1eDPwnDh1aa56wB1n62MGkxtGZXZf4jBYQ9dNnywpkK9gkzY6JebEEieUJoYM9AruyNMjUhX27jq",
  "key5": "3vucJHPCHSiEhysLMFjFyshxoL61P1avYXFZRV8944mLS2pJyxuAEq8dNCubB6hGrtWUWgGVv1xj2pP14je6PzqZ",
  "key6": "3oQcm3854ntSQwSyy2Gey5RXN397gRqmp4NcYGLeneobmUfYjywsBnXDiRSva4CqekEfkg26CpTCPz1Tk9zbeSad",
  "key7": "3RF5HAnLHq3p2aFBTqTgjiDG2YrMMGsG5Sbswe6NjDsaq3EfdtSqnc1akb4b4Hzsyk3kYWnhjoLAsQfz4PfUtnav",
  "key8": "ud7nqUTfJfEv2WCGQneLE8NhWNJ5PqPutFdYvbcao3soKrTzWeENBCgHG2U52PmdHQN7Dx7HajYdzhvwPoz8VVY",
  "key9": "41J9Dk2yKWU6VC3opdpRMmtnKQDWJ39gFaVz9tcq59XYV9gHsSUY2NeeKxyuZ4QVm9UAKuitWv2pY1vuJ7JAkHyR",
  "key10": "3f9FPg21yAQuTQKZVViS9RvFz44F4HFSELnVuADkEGXSF6nPKTGJdJU2vcJ1o8PZqDEZWkKajn1MxBhncYKvShYY",
  "key11": "DvBgwpVWbqujFtVypRYAyTnGYuRV8Kqeu1FWtJQDUuNz8Lhx6bSJgNaQiG4Wmn5mJHfEineDq6AX5QyCd6J2df9",
  "key12": "3oreAqF2SPyWJwTBXJ1hPtP9WjDbeopAHGQJWWt7f267eCLU4pSSBvtWK4oELpQdbGNFAiBRWYbX2YKbaSFAe5SQ",
  "key13": "2C8XmKVNXiLdkPwEgRQpD2gFw4Q6CzGmuC9ue9vUDaEFNJ1saXGYxiavGsrMfVVq3BYSRHaEYKomhGNR8v9ozPa7",
  "key14": "sLNCQaGMsVM9Um7y1uqkm9pEsywVkb1hsYYLBKaHatA2cxQw7mvVxfGQ5sQkzszbesAVpmt9K8ZpckduvZaiwEv",
  "key15": "2tEX32PMmsrrTAMhQ9pAPnrV19667m7362kf7my3NVN5kXnPkUb5vqLbQpWjY48N35J7WKST9kiHzMcqVWZs3ZEP",
  "key16": "2g2Ce4918qtpvRMKTtkH9AewB2i4w5iSQx7sTwS7FSUr9KXJADYLuHD789oseF1LyJFYssTJvfSgB97vGwTFLjdw",
  "key17": "27bVjWiTiyoyqYndVyLCCEHwnZ4kSkF6qJauX49xx32nkd7qefJDd251zB2EhtkwGL72VZwktcrpb7QwdYsC2bDj",
  "key18": "WUqnifPy21DN58mD6TPHL4cYHd9BZLkA8zdfk8QgMSxLVRx3GZhAugTAnxfnak58hRLa5UFhFD5nobMLVDamwrp",
  "key19": "4Vi4nNiC9xis8JurSQyTmmqHPx4ZJEKuQxbFqfADobSJfcgFrnZTDV7viATTrpUuKNHJcukz6fLk5Ef3CNYJcxaH",
  "key20": "5i6vzNzoThavhTey6c6JjPxamwHD25EskztLfNAXCm6Hmaxae9BBr5N4Lh1Nqgdq17FjMqJM9itnj3d5pWsZobjr",
  "key21": "54egSr8yikA9c6gUMPg5kRRVNwUTt422a8YSxYtXxTVLqFsGRnnfTZBcDDRQW1qCQiCU4UFKJNdXWuQ7THZai6CB",
  "key22": "jPjuFWCufrzUbDi5BdfhMLEUMyyAH9RrHgNAiKWn8bMYWbCADHe7qrYpMYYCV7HJeebTag37DDWTzeJqsqcpDZT",
  "key23": "4twk2NRJjcZx7q24jgVu3kBRbW5114jKZdT6G4h7CxkMwMTwjTLdtTPRsHFzA1WXFB5dUBeDqTnC7QgVu6urXsSF",
  "key24": "4mLJgoqKFyQWANZTnYjg53AuKxWVGHmzDH2Ff7AZXBGzd8hESb2EnnogNnL2LzbYbnVUJ9SPKRnj21GyxJLBgBDQ",
  "key25": "226bmgmCNU7NAzi43rFWqjM7b5VYPYrRdTS9Ub6f513GSveX91rxcqmB9xv5TQKD7vnno7d7RX6gRpwNz3d34joG",
  "key26": "4His5WR4yEEaimZwsizxkeCjpRMeig5t3gauMrXSt3Y16gV3RwJkhCfP4ag5YX8soyX4DG1Cp59F3rh31K3EniZ4",
  "key27": "DNWQjDQ3eTV98xo38TdyViGcAF6Jdo8UPp6oLkA7gqvpWa9FqDmKVa557vx6MEfDd6obTD7SfB7v7c2eb7PNVND",
  "key28": "3trTrY8mEEmmFPLWujjgWvncNmFzNRxnwqvajyPJqDcSF9oqgdejSNdiFSKq3p4bfMzpMttpvA8WGD3NuoaTDJjQ",
  "key29": "RNspj4DNzbUsnzFivLRMKYJQmwHMs2DDCgk69VRBMy5zS2PkKRXEEQraeZTnvBy3zKH7CMXvEVJc4KCRG1tPzkN",
  "key30": "3cp1FD2Jdx23g6ukbpzbRcAWBv1Z8BnthpWqzacNaF5GVZYU35LLbeQ22fUaXDsS44hoGoxfkeeEC2prDgLUhfXL",
  "key31": "4hjXh8AEP3Zq3AVR4CzZRseXrnmd3iLEgSfevxkK5gyZQDMnhXicxYSFove2XGqJRUPWrURzh4HQX8KThwqcUwaN",
  "key32": "589dxuKz7PKhw1pFKy1rY6mxaKSigpWJ3eSXFNP5mU1m1nMFmykFTxcXQrMbVqkW3eD57UTeP96aM1NVUNjJJWJD",
  "key33": "3tUoFZ1zU5GakMQokNpdeHbgFRpd9r7ENXy28dmsZ4gfiYFRMkPnF38d7gFFby7E3aNHDgVKcGMPH8jLoLuEzsTE",
  "key34": "4XQvwqxZYYUqzKy2kEHWN1wSxVvLWJX2nzdRDnb39Qrrzc1s2sJzWapMzRbeGyohfQ1f9Ezcg7RYvifZTNTxrp5z",
  "key35": "kjZR9vWvCxSWCWMhRX3AfbTmZByjxmyrKB5CmFU1jBLFnLc57UBqhfmBR8nNvUNg75nfgx2Eyahm72FMC7kAP7x",
  "key36": "4hj8W5dyThDtnVv4pyv99ZSzcc8jdxFfTWGZfWQ8HNfaFi9MpUhh8yPB7ybfuh5Xp1kbecJE4gRjjMx2dk67bbMA",
  "key37": "3ek3QcvLdPH7dXSuxqNvUmABaxjWiQL88QrzDUy7FiFtEj2Gx919y2nGTFiPx2RmHPS82FZFgV8N717gxTkUY8au",
  "key38": "5iLQK4nM6irNyDRNqZnktEDWx5FsNpfvtLiXz9pUyCv9ZnsuZWDV3Aca6jZqNNyKM2vvduF4qgFs4tPTVFAL2H3p",
  "key39": "4Prz51fRsxM9TLYvupcMMdWQfoN8rxe6rpJAiExXAXH43ENchxzPMWArmxfW9GJzyPRswCw3FZNNwbhAsnSgkRv6",
  "key40": "5FSXwKbrtnBSqGPQZKffSyF2smt5aGNV3AYpMoGNUStJoeMNiDGm8zpdEjtf3ZgU7Ew3YtBfjRxsZeaxt52Qwt1d",
  "key41": "4AhwA4NmpVX9ZS4tLfkpmXDd2kmESM1UYvkoDjgKF57RW2LApQprpvDeKVnc9bVCE9oh1VeMg9Mm1abMwjnYeTMe",
  "key42": "5EyJs2tnfEiDjEZWFbVVYFfUeUV7rqJ3Am928yeTNCKWcAoywLMMbsGJDSuC4VVXfH89E9rgCPvuBPRzPHRP3SSB",
  "key43": "3g8mAYRemqGbTTyCLu8iYFYe2MoaESyxLggsM26hQojnpKs4FsZuaNrTpya9yfsXdyPyqsC7XnK65rccUXy7Bvyn",
  "key44": "2WU9Kyb4Db1yEMoKtnwRG3iisoaLyWgpkystp3CMWfTVnvSfy3jQN49NpniizGgYqf6wDULCUMhMPcU5KpsovjDs",
  "key45": "2yuD1DHntsFPZeeNzXJrn2Lro6C9UvupCTGJU9m8fERSjPXZTG3Zqi1XmeV7S7o4u2BxEYm3sKnPamtxat3EiHGp"
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
