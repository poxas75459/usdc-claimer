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
    "2QNBG1UV2uoKHmGvNMiCpb2cWkYP6E8KbSjv6SXh1v89ydUgd82VTxbEazgtPA59o9QuYmuoovVW3UW7X2uMr3Td"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4MgDjH8zQ1r24mq6zPYCgdmXLRpgVxBFu4bFS9D9xxHbRAfKQMgV4WsUDmMEFZv7VU7ZWanF1tz4zxdpDY2ti9w9",
  "key1": "GrL6F1AEo6DuAFFAWJLxNiAEGPou3HWnxjyB3umBHHbrkQueh5RSf5yVhWRskF5YUk62VCYGYtB1KxpWLuHKLaZ",
  "key2": "27idQCvkKSyHQp9bniXv3cENkEoYTPCteDEtMQVGmNEfJQ29Xq7G8UaCNpK62Ad4GzEYxKKjQHCGLLf2VMTWY4aP",
  "key3": "wF7YoAJ9i3XKPRP9CcTrZKaT6J241ehaaAf3mYkQkb3PoqJjKEZHfdigWuKjtxycZ1xC4jnThFNZenAADyRVzSd",
  "key4": "3WWkBbnSDE3qECbbj8m91dKW8xFGqbVsJaHijcB1yMw9a8MGBicAhUNWCDSsK4wyE7HXoycswuGEo9vhvg1GAVvF",
  "key5": "2i2EbkrYjrbWCgGELrDaNv9bVyFuPU6i4U7CxLa6UakDAuQMNY1r69ScKAzgcTFcWhknzWNyVNmWVYXqGi5uiP2X",
  "key6": "5zqgG5XknSpDNzn76nhMvvBi72mozewRSzXtSqNUnCJJWL3qduG6CaDgk7xwebWkdbYwtXFTNz1FNoqWdNwkisKz",
  "key7": "63qj1WPLdZFcJi38Ax1V7zNMM8PEXYDLWat45wvoWAgzxtUq5P2pN3Je7m1zvumcQmCKruxaeTAMC7njA5fxZeCJ",
  "key8": "3PBUbJ3kWrKM7Erwrn4XApu6xRsx3ik3XuaJFpu2qpX7fe8kvnsFcd5GzHnQSRL8wfHmJHGKWVrMkYXpmyg4ZvH7",
  "key9": "464HDFfxNgxde1FMadhTbTEucTDEg1XhP9ftBQUWSf3D46eEdRKJj1UnKia6e7spjhF6RrjnE4hcbfwwcgCsbEbz",
  "key10": "5fsxyugXcELBV1xPmav3bD786F4GrAvSzQtSk6kE5fWmB3wsWxZ5RREpW15J3cqN6oGMnwN8uCuSvU9UujX1u86u",
  "key11": "Br7x4YFzaX6jtybFRfKHx8ZZYJPNVByKJN9FV78b1F59f9ZfjLePJn3eBr3GdNeCPd63EzsP29r1RuZK8EA4byg",
  "key12": "tE3qCDy5o5Dwpew67cj5pmpbR3XN1JsgJCoEu7f25DPXpW6ufrwGFfQEPsWN4TTTc7Q68tMXVkY3SMP4WyK7hhg",
  "key13": "3VnJ722u7gEiAobKPeKJzv36JxQq25rdyETjvHHuU5chpeLahMreXUzty17Tsx2f6pMJLxZUHoiMUpjMXX153GpQ",
  "key14": "VherVpTotbmEgiJEJF14y9TowN26jGCAiTKKvdKztfVr9vcoywUmoz5WNHcKB4BJHrMCTejm7RfqffdyDynCHJJ",
  "key15": "4Jx1AJfpCpgP8fxg7Kvyw4jZBwf9gBmccbFv29r8nj4smt8rcQ4PPnMJt8smzgKZKubJDzyLjEcAvVosJMzbsuku",
  "key16": "3FGzFqxuSREhmuC89n8vQnQcLvjpdBgz8n6QcVn2dGXWx4uDZYeMCqhWc44GcLui7DkzEo4AuhuGeP71ucvL3reY",
  "key17": "4Hv7UbRRP5gfvR82oLxVkxkk3UqXMedrEJZA8Nez2MTpk7xAhZia7WrKCJ69FG1o37ucnd6WiNHJ8X3JDpwAQCXA",
  "key18": "4bcFXbc4Wz3sMJhHvvNA2vwm8Gt7H4L8azc6kVNo1AxTDXDbihEtRzb9CZZ5fzTEpfhgYCHpak1zf3xk2H8T6aAC",
  "key19": "2sddVDCJJgHfbrqWgX99q4KCwse4CeSfcy6so4bZr5g8idsePDLTdugeDot6zP7KVux1zxoHENXJwe3xPQPm2VGr",
  "key20": "4pGmwbkL3Y1tB3KfFShAM2cxnnBqs3XhPD7nPqfNK2QqJA9JJEx5hJoyyArs1kGHxrSoQexHiyC5aPv5vdHA1XpW",
  "key21": "2fsbUuH4fQQ47LPevQF6srbG2GyzT51KKRfZEJuEAFcMnKMsdT7gWxwWGCmp9HqZ6iUC5Rg5rSP7UBQGDAqPzcvn",
  "key22": "4AXiAQJ1dN2s1Ss26GCwvo85reVKZmEp4P3jzwcJxtDFviVqcBiEPiP9kk4sAMB28YSowXeW1HWrHggh8xzyYYbn",
  "key23": "cXKUN198FkHBVDSitcGLhFHqfm97qSkESEkuuhUPNV9ZVe5iAucTcJ6srZCkfgdphXLwbpSf2FXFyppRKGDGNYp",
  "key24": "4JEyPxXFVNPRQaCz8Aqj8AAcnntDVTccji3PU3n71akSFV4cfvXDbWMNZnsjVn7nJWtcYi7VixLjmUyKrywCcLGe",
  "key25": "3491uLeSyP5QHGatbLuNDS8Q3q8oYyDhVNKrPDpxsJVcAGL8TsewHdj8tnLyhNXjwpBJBWdzoxgHKa5PUvRxZ4um",
  "key26": "392W73c31XQd3s12JbcQkgC5bSwxxxGhENc5ApgJQR6C4mPdxbYzksXujpSxXQnLiSsKsdx8cEj9j8vQHV2xQ9wu",
  "key27": "5wpsxmpLVUvvVTveXGkEAtvoQzMkVn3TE6gBSaTZzceJnKCmy1j4Rw41ZRAiy2zVHq6P4ZXwbkpU6JejBEmd1fqe",
  "key28": "3DCqMBy5fgFgj1b78c76yZYKXbnQJd2ubuoeeDoHjNDU4BG5xFu9R76k8HG9AZwQLBsKhHQH87JRMQgYAeZM2YPt",
  "key29": "Lbxn1QrDutbKCdzmKbZ34sdvNaRQ3L4nbT3s3t4SgzxEMcWF2rKwnYRBUzGisAH8qVycwCQsb8EvL6QbbJDcd3w",
  "key30": "3iPVp9YuGeBaDPAQaYECPAgtKzbLBD5Wx7uvkv3PaGDuXvPwpwUdv9dHsfepwGCXQrFgrvmcDdvDWdNc3JaB2sNR",
  "key31": "2yCQpJZKJKe4bdxCWhgKaDAxAyBQiQF3sK8WpCEJHeQpXrZqFzX9YRUYeRiANHJnWF2Mx71QhRpgEFeWJGAPDL57",
  "key32": "LzjftSy6WQ9m2am22t4YMB1kiCRzojSh8oXRDqSWLwRSgh6hPeFsayQXnrdf9bs64pf8TCG46JgUaAv7s5BZFzM",
  "key33": "4CmY9TtyBJuNoVUHUTy7mCXMBt3uzGGWhFzRDMhhfTwAW5ZkQzQk1xyFo5u3iFqqXvoAcT2dkDMmwN1ndr1zzvhU",
  "key34": "3ceBWHV1Q1PeKot2HG7ST34a3kQGDTREAvHbEoiKaoDcfUYLcm6NKupHGgB1g1nG5cBZcQDEnPDRbyARPRRVzeZm"
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
