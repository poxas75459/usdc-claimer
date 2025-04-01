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
    "3sAZqxNM4R7Sp46ccJacEzwZdFApw6NWmgFc5FJpK6MvrpENNa922ZvePzFTH2Grm4AMgePL4Q2MvPB6ozrAcRPE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2BxbWkuTxJyWgNwTRLgkfmBhpVPSyKUde3eKM3XuZHyuJA2GSzh8zCLD8y3aJceZMifjVCd8diPUEZdgdhDyMT5H",
  "key1": "2AunKtKgvaRJNdCUfY5x9zmsuCRVmKiTZS9aLUao81EebcvP2TTZTinKG32fczMVVzH9WFBkiisV72AxGxX65LF1",
  "key2": "5F5WdhtocjYXrnKPHRzdj2D6tYEQmw6N2dR7ExEaHokkK1smL7y9wBKheXs3uUcNKXs5Jddz16CSKYPHWKc7nmLH",
  "key3": "5KQEtkhWUP1QbECStsZbrqJs9NLXxWYEcFX9KNhhTTUaNPjkX4ku93rmQEW2NYV1vHEs2cDHyHHFcs8Q8oYK9yDW",
  "key4": "4WzXA6LmwWSbK44RbPZa8TpY62ruNoo4qwu1542DhhtALyP2BwbzVM277TDDEV9GVG2Yq5AQu4bj9D6GXtEDTyxW",
  "key5": "Pg8pZJ556W8b61FY1bGivyLHRZVZXhrYLQDP6n2Wy8LEVKDs9yFAHPLkwsZ555wpcdm9zRZuPfRbdFmeFdydL9d",
  "key6": "yJScA6f2C58ft1X87Mig5PrisMHPbsxJAibc2vX86Z4VDAvUMJWtp7HBBMzVonNBKDF8AW4shFbiVf7xmvSqA2P",
  "key7": "58v5tjMGn8Qhs46zcdRxF93eYqjtsifL4UAFm3qxbrEi6aQDPzgUokvnxsDdGCRnqtmk4bEBDJZvZv3XYwk218JM",
  "key8": "4pWQXg8nRRe4XHCoFLXrtmXCPd6HuNjs8u6R4fdg8wDvaCWf3VrQBn2BNxjUgM12fbFY2RqbuLNbJeNTGqEGvvDh",
  "key9": "51rQJi7AWp6H6vU5zz6YDaQMyvyJoftW6RU1yUo33YVjBFtv7s8bpGbzJRK1Hw4v731bhtSpkNYXreKhdprf1y3p",
  "key10": "3DsCxppbvZSCj9rLPN5HCYS5yG7F4QXkTigEqrjP8ZE18Kfx8AtY1j34oa7Taw8xDpUqgmRKGbJ9zyte6fgc4gSU",
  "key11": "2S97qHP2CJHCrVSv7W3D1CH3xRUa8Nfwws2Mzd1F45S5AmJWpbewPGwe7PwzFispThd3yH6E1YdnYcrSK8wR5USx",
  "key12": "1civTHa1nND16nfuPouRJHkfywHK2fxbzRcY7qiksEEqqkcbrVf3jZzpSvFVX3gtCyNP3jMKgKoZ9Rp4CETPdHU",
  "key13": "21fc4ZVEgFj38uUtxaMnzYQwdS5gE68qgzUeADqFgrYTu4UPA89UMVt64jwpkSxEtxc5U1d5JMrFDKhDkGcTNwty",
  "key14": "2ddNK5HTTbfrUT3iXx2nKmVtMksA5DgegyZHHhFUK8sbdPMTiM945mPAZXamwF1H5VpHgbTZfTJqG9K3ya96RBKy",
  "key15": "wsZWizJZhRggkr7VCdKCmh1GbkaL2bvw4jFZJN8wdWDEteD6vQQD9P6c7GBczqKDXLyKh1f9QSaSv6gBaJoy2ao",
  "key16": "3YM34mnjFhcJoaQ4CFsbrPFZGxRbSbNfz21gY6HXKTgYNAmoNTV7VccEL8RNteBzWrHUTFnfmX51vewcGu9KY8By",
  "key17": "3FNeBWadBmf6kTAha664sFuAds1RiMG4V2tdo9EXKQo4s7gLbhZvHAvMEfMUgRBwpuyZQCEnqB89V3SQuufiYrLS",
  "key18": "4z5RdWscQ9noL2YbcF4EoaQnrpEfhW61fd1TYQA2RNk6UB4zFYCYjaQUPHuFYPvfZ7PKYrH4f3F8KKyJSCbUq7Jo",
  "key19": "64sSqEvbo6fwiUe1jkuuFW1hXHyz71KigfJvYhvGNugGtUGaw2ZsieN7qeUeC2ioU71hWmXbEBmVV1SXB1f2uRXg",
  "key20": "3SQdXyCnU7S31BkDUU2UWWKoighccRgE4yosYL69YMC6xAfvXjuA4WEuJ3VaGNj1fUvBUeURXZkbjPXosj5pMen1",
  "key21": "2Bw5QaFu14qrsQFXPWp51UENPqrFJd6V196jdKZzhCmLsQ8dJohE7TNDcQDfnenUwo159vHjzB15gn8bFFq3JinQ",
  "key22": "3NqjUr6QLH482MsqAV26KsUBZW8u9EsRoQrdVixAe5rNdx4quHCTqTxuZ6MUVMGHwbyb7msMeB9Hy6mujoZsiH18",
  "key23": "2N8zFDizDBjgStJQTZqTh4ESNDw4WmPUB6Fu7Yn41wpKugQ83uiyMCUS4MeDVTCWwiedaQVDoW3rmDTHxnnKuw6r",
  "key24": "4tsj44X4mfRsxe9fssX5dKGVWWPs7p23sQiQfqDytN7dd2weJEgeh9pdVATYjX7fPf1jpXYn7KnoyZZHF2YKA2UK",
  "key25": "3itFktv8nPCwvHtfwFvsYu8N8qkt2yKjwLEcPpgFpuokw13KRu2ALjRPNJocidnb2wDCGxJTXCes8TJeZSthqoCr",
  "key26": "4WXxRo8fX5rwwmEF9WVJUcwTk4ArXyRABCjxzWjPDdzBfgrtjHzo7DXF8wL9boejaH5q1Aw7HBpFPPCu2ULzv8jB",
  "key27": "4doWhXbwYe5EpDotGhNdt4Yjv6iDdjx2oN6iCHV9fF3b5FNpm8p7itgTu8jWp6Qs1P3Uo8g9RNxVw5vmZKEtXN8s",
  "key28": "41JU6BybPkpLZd2GeozQTSxKroWZ91egKd2Er9d8ysHrXzxSFMofS1kLZZHf4L29WSAPqP6e1oFzLXVBxpWNsMTx",
  "key29": "2UUpNpXVkm6KHgcahBzubB1JgyFNgT16QxVyr8BxpKYNJPaw1WeGdTPWvAyN1s3HaCUkJGfQF1SuEcwAPX5A4p53",
  "key30": "5BEvueHkZAHPA9v8nnf3DpjvY12UrgFaKxaBCaVtAx4eYx4TxKYfAvNfSMyBtnS8f981kPvNSsJjLEfw3vkSgxMn",
  "key31": "2Ze1KspG9HjiQkCVTixve77JwtNS3V1JGYUMQgL59WytP8LoY2kD56guBoNDdxnSmVYhh8Sa4bLQKkEjVa7LB7k9",
  "key32": "4vbEGREcdUL88BgHL3Sq3zpS6Ym8YjsE68Dsu3doyudrY2QTy2iBTKxeTCKvFhx9CbwJVAqrQ7fiqiHU8KxHqSiF",
  "key33": "5DLm3PWs17zaSDASXi5iHtHcpFAiNi5sh8tFHxT68WESd4kX6SNhzcDS47Z7GwDLdLLjP9AtTTbUGahwGDiUBiX2",
  "key34": "61XVDmVXxqExe4yapehWYm4dWKyJoGyfcHZLWSWK6Xp4StV6YLnqaPxqbRChJ2P334YeuxjruUjrreUuczdqDUVE",
  "key35": "4aABwx5mZthPr32BBeK58D3efejHueNUexR8aUDffFgMMS8vjAquCYgTC22aRugPvvLQPFEuaJDF5y1H8spGt2dQ",
  "key36": "i3xfyw4f3jbMirfUCYMuvVM2CD89kffeyZJ8FcuhWGiwqBAANfbcWHPi7GkHcdufVoTaGe12cgypMThf9boeSKC",
  "key37": "4XrLiPwokUDDkyG9F8MU77C3xjDJ7zCwHUu3DUvbtJ4oWrNDbd2X6AfUdi2jDfEN9ibSZJxriQrmT46iUYW3h6AF",
  "key38": "TdiyXcEt8UYHSpFj5D9fYqoJ7LW8LYZ2nCgVt6WN8Gh3rpuzzXHPbC19TDFbzoaAMK7X13jpT2KjKj9EBKtG1Xw",
  "key39": "215RzMLogPP6QmyFCBsTLN6sr77zDKP6UdirGu6zbsGh8mE2rPSmK8UUR29wzBpQymdPJRX2skrZnsTuPjnSHZRS",
  "key40": "XXuqytNt4RxycjrCUieCbgLNW6FbmQQ2xzfUzuu3VZasa4PvqizVxYRmfug6jP9zfYRx46iJph4U97jBou4z2qU",
  "key41": "2wuqFS5JwLNGyWNhc5wadvYe5bfHi2YDXuD8dRXzn3AgyLJLmpgqMU4r3uYTAL28ZkAVvhAkbYB6TZxZPEm5bRwb",
  "key42": "4QFXgsxcatcAjybxpFDgBy1DczousiuLWHJZ3BEkiFiqnTvQd5gqNGeTKU8eYmgnxrHNPweWHW7FT2xCFeCpkhuH",
  "key43": "45qB5C2Jt62gWQ4ZhPwtvgbTNmsy4kiuiV8Q5xFbMeaZFde6S5LcnazPnrZbUGayZYrTyix7dGyzDefnaqTPasAK"
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
