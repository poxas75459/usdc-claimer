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
    "533AVRWffxdAGE6My6616UFgfmLKLkgktcYZ6mGPVCF1yBQ52AiFV3qsp4CU2gNUM43rL4Z2DZpS5Y3eyN44u42V"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "48JRNTfFCm1uibB7TZccepHdjiaHsD3ara2bWdqyQWTGLn2HzzSaqK2n877LX7Tp2GkDQq5cEPmTFNmMiq3ZMaib",
  "key1": "3C1SrRVxGwMAEb9nHNJTPNfZ1Vzsx3wWpCkTzyHu8BB1CXFnisqRgXNjkHYmeH2b4AYttmCmwNkUBiSpnDhwApMH",
  "key2": "2BUjJLJqX6ZuKcRMTdqwUC5HmYLwr7muojQRBPoVXu9bEG3YLSgMrF2k2R1wTwuMgBrZ92oU6B3HpkjQwz3nwYk3",
  "key3": "2bGoKSs9qYQaWGCUTBb5FVAemUp4nEVC4Gz8GHFjoxJ9xKHh5NPUdQKuvnhTn9ifNtDrDPEJkXxmFSTNBNxvm9bX",
  "key4": "5VzFZWME8PZwA89VbECKQy6oizgm75z44GUa5YmyEwmP7qUHSNyg2gvtT8KZW6ikGSFPmvcwWTDrq9js5MxBkyuU",
  "key5": "51698QgUBai7NDQVLzGQwUqG5m528euw5hpJU3XhDVxQM4qcVDwAT63pNeteq5Z5cFA4kaAQGyKG69NiAUoCCHeh",
  "key6": "3ossZUxKD5taXQceSXM98Y1biwbN5VFj7pEx3Kh6vKMFm1Vu8KWEECJfSFcdDiTqH9gMRF8cqQdhNgnVv3KG4dMp",
  "key7": "3jK5JbTxD3yyWp55NyceWaBcyfGUKs5MoThd43ML8XRVMp9Dn4QTcBzC2DXymnPfew1YqUc2VSZzE1Bq5zyG4RZm",
  "key8": "geudCKfqxVVVUHruKtnTS8YbsfLBXBXG7reMvx2fUREH3niAQ8S9aL8AjUtUUViDqq3usiP1FhEVdMFwkVyTqzg",
  "key9": "6sBhBYnQfUdQPXzHH7VskqvpdqFjTtQTEj29Ht5UHrwgLshtk4PaD7VwF4nqoeGTTczeHKifgYhAuS84KtQM9ps",
  "key10": "43EzdHbyRA6vYTxfrYCewGJYNDyk9MKdppKS6fVrNSkP2s3RiW2HUjGzjjpnZr2ycVGHsBoC56Ru8r4KD8yiYpwB",
  "key11": "4nJkYPgFnp6eCjUF26DzRPUUZjpWC8gPqVaGySfmSTCGR11WdxViyqwVvmDwQCxsCUpC4GQSBV1t6WEkSheBrTvg",
  "key12": "4exUWg7e2TcwdNzDDHFKhwqfQQ86AimVnx86fdgAFSUFHrqLiVT6qgU2DvvR8Ly6YUeuvjNh3haLdFb8Rmeqkktw",
  "key13": "2JP8nxnYsZ8UdXSh1PDUbCHTypCCpzmh9F6tKu1uCLCDt7udayjZUjqDHqKY1hsLm2rBzmkvZXfmU6ZQY4YaXKKU",
  "key14": "46ewpNhiYa5HQh1KqtfgMhrQjyeX5Wo5VhcUTzwNxEXfaGAzX9EtcpT8HdxvYYTWfjRP1d7sVSyQ5UL8UvYpeQ4Q",
  "key15": "2xdMWPcudLgGTkcKDgXYYeadrF9E5dEM3Bnjt52PqDU9BQU9z9RjTzS3sxnKTbbL4PdgTCSaAxYafuS2SEtGFFbn",
  "key16": "2Fzt5j8psBRN6tAungZmf2ctuVpotfjbdoFDAQ6hf95onpPRxG7BXFpuhp2ZNvQpcPNn6TKPMFjTaKL7xz3RXsb3",
  "key17": "25By2cQpX6VSa7TbtVYeamvPRN1WD2RyCi3ix4yqfpENjJWmUBM87p8WdEzJpvSFdKFxMvjcm6s5AXFBmurAzJUZ",
  "key18": "X6qyoFr69pEcMijWftZU27DYbqNUos6waZahZ5XGAtFAvkxmmmj22oV8JC5LUU76sJAooqjSedd8hXakAhNXWvf",
  "key19": "5at5W7oGH3hvGQ5hkfAwAAyXhzbHFRZdnzvUAfVf6Y3RpHhWsueaHXj1FuGybGe7QL8TYDFvQiePr6CZEwAAoAwA",
  "key20": "4KDELRcYffoLQQwZCZ7Rp4baLpWpUZSDYbMQ6pe62pAEY5kSKLwL3AnjA8hHrsv1K8quv4G26LbNaMrV2XyEFbNe",
  "key21": "2C8YS1Kd6yQqVLSLDfASAqdgmk9i5QZaeCFNXi8fpmrGGDFcNADMXQcjcuoqgTRF3AsMsg49hTzv4R8MQ81NKC3m",
  "key22": "2ErFY9xkjGV3gU9sRzB9CC7LYkP2f16sXcdn6AghNBEe82BbKqsiMPEsyetWg76hTNaCbxQucvuNrhoWvv5MKQqz",
  "key23": "4mGFPpNEByPHW1azzRFBL6PmjPYyn5gaSC13hKKBVzXaXcXvYjSWqEKj24W2wPyU2D57DCDhejZpURQbp1iWPNNu",
  "key24": "44r8mfKYFdLHnarMfvNCEyHokMboPXQNJ4jpAjANqW4dJ26SfEFnDCYNDVDFQrbJqd5hAr9jMBTck255aKiQ53JG",
  "key25": "JZkTRxNt1Tuw7HXxJ58TaHEvaPoqa9frq22jMMsxQv2t828SNgVWR9fSvo2NBBGhUwNkdbsZhQdti7vqbaCFRQw",
  "key26": "jeZdnYLuVeRUp5w3NS1ZsVxKxSgLE7WQuxVx15e1DseJHZjNDG5a3uMQhNt5PTrzE1cUoGJfyuiPN5GGwe5n4xG",
  "key27": "4JRdLMKTVtzCYc4uUFtkMsKvAeQ8LVSaDGXUBdSwm7MzsYtmXDPZMGTyWhXQ3UYwyiRCQMCVhRb6nfXNTAoNXhHe",
  "key28": "W8QPY2tcYTaARpzD8X3u5AAso9m1Qap48BSoRkkC371M2BitRJDKiJav5c4BmP4vaaVg471qQSupcHghH9poae1",
  "key29": "U2ZTM7SW2KxZsQcFWhbSRDgs3fvVqaxK6cWtt9pqGb9ccfjnPrkxiSMdQNReA56X14kTcSRkmUDBmErr7L7kG9v",
  "key30": "4A4XUqxuDR4Rq9JdbxLGaAMDpEwaLBMnfF53F573772TM2jzTMvFjpN74uUozo8wvQJfCzkGhNXDfd7X9FaJKzEy",
  "key31": "2cRaAUVpURLnDxd1uBVdCybJpbHvriYwTmE7SATYAuE14oibMMxhh99ipQbQXXodbv2uRfMmh9zgaS9pApiRShWn",
  "key32": "5bgaPG4NZM9Riee6M9ijrTx2vyr7G4JqCuun61TCtFLKyndg7CXT7EK6EiRkWW4hHRko6ki6vJAeD3dZYqjQM7eL",
  "key33": "5RGwApDYAyfHPyLtJGzSac9uJCPqNAJCAAeDm6XiR84zLM2PJHqELrdEAikUqzDhuG8yi2ehNPDcP8s9Fwdxr58p",
  "key34": "5bYBqnLAGnfBAwVy8kPgCBhW9agJ4ABqsw8bLSbACQYtdFSmEx6g6HWGvWdBycvrdMudqBV3rw4TudpWi4uLafRD",
  "key35": "3WzhyyTwFa6Jis7hPgTJDfLP32ENKdPK61ktujLVcr26CoDhURtVEu7e1uHj7SmewovYazvi92cJbVvNzYZLDiYJ",
  "key36": "27AttpSvEnwQZncj6vjfpGZ8sBbgbonHz4T9AxAbCYeexktFKP63EfhU4mGmWgFi4NZeMb37ifN8YJLUyaqMPNDV",
  "key37": "YbNo1DatZVrwwYLqTaKkSERgRoZybvALPMz2dhsAHgKQsH1PPuQCRZ5DoZjHn6VxXoqyXrx6J1CmCKDJGmUScXF",
  "key38": "2EEeqLYD5khw9zY8vRzQb1q9PGp6K1yXdRpecd4Vo6hbjJTT9LW6PvCnLVLS2XTaoxF6KCwCXNyQ3PtSeLefue4x",
  "key39": "5U1YtNuqyhwSxZeVTKzxYFLbH5dCA2P4N2HdwEq4BSf76aarGKSqnFdmdZZMWH5xW3SoLM6K5PMjosGbiWByAz3C",
  "key40": "5tBdN3RQPsPSvmro3U4JCpL6fJwohm4X5eEzfjXC28TcsboaZZNjhgnQg3ma9YME2M2LBHLsvqAyjm7rh2s35goF",
  "key41": "DGnKqZHYGaqDQMw9XiRctHYHev3sQgBRhNSaLA16scB29JYm6ygcygMpJV4n6AFZx2Ve7ET5XuyUAWqFCad8MP3",
  "key42": "5BeXD2z6MYfGFBAc4sSwDYnohfBU41BeQdUDGtPtRpSwtabAbcCwwYRkKMNdE9e1t2vmAMXA5oU2NsYQkiRzgAqs",
  "key43": "4RAYe8LoH8JBU17z9B8vJ1Tib4hYEYeNFszsweX13PCHy11qpjSdKwvNuaG4YDr4vVsNtSUZLTUUcyDMiUhq1zoH",
  "key44": "5TpWiUuj1d3yVDfMvguS7TPmSeFYKXLSAwp39xcd9aQi7TYZYh7KQ8F7o5tryJQGP8yrubXutK2a2SW1JyjF5n6C",
  "key45": "2yj7wXytLvpK82M6CD6hhbRbXMjCeAYi942EwAeF5XTsvKtpKow5koXbxtVPGfe2wghvupxqJugQoE7HYubV4MXy",
  "key46": "GbHSZoNxwM6ps6mG3kXWZJYtofJxx5yXSbJH6oRpH532T5dEdkTmk45bHbB21UrJVQRekZNtGLAD22qZixAwTyU",
  "key47": "2Tb7SNFJTLHHSLTjKrDWCgcyJeGBdeT1swm8cUe7nYvuYVrh1K18Xhf43U6jKDg3DT5pbmszUWXgqZGPsjBqqhct",
  "key48": "mWzxX6dsTbcGkKfx8FZLcMV31sKNMs1w2Xyj9J6Zr8Jeu4oUJL2aMY1TtTXQmbCyfhfehD7FV8EM4PsnTY8Nt3d"
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
