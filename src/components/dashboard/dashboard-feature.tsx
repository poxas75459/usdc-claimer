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
    "3Qoqzafs5WN2E4VqUPCHFqvEeUGYpt63c5ngQcnneevDWMfbo8tFgXWfP8wLKZ5Py7CARPjYoaEwJ5suwcqAsAr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5zZLKxuhNRvZhzT2Je81uDJgeYLdTWLepcNPFgUcUYxZ1QdzCCF4Net4wvcAwSnSVN6xFzE9bzWAb9xoEi4SaLo",
  "key1": "5Qh2Qxvg3vQBzTqZdvWFGP3z5aFYyT35rHge4EcbG8b1Vqj5khyyh63d4X4KX6ZKe6w9CZ61qfEqwVxoHRQ31ET5",
  "key2": "4t3v29yt8NupDEeqPnoKyvpw3778b2eY4mPv1QByM2L134ZmX1pFJffGkgE1fwqsrvYuLikG35PHW75BhvLeKa2r",
  "key3": "5J98EzEuvT6feEA5xSoaXv8yhktFfMFEQSSYHDxGMeGtF8PUa4QVqZxgsgxhBhtVRA1N4aQ72rGwAHjAsRHSdVQ",
  "key4": "3xBLpP5im8gBFUAvyT4m3QhEjdCTKhUy6zm5fX1frWhi73RM4P7Hx6gPfdWxAhJahh3ncB9eaZVJ9VAveg6zFxjX",
  "key5": "2AzmY2fTSDLracmR98aNnTU9PtHKbNRxo8f55XfgRiTFndmwxPhDnyKmiHpP4JkunjfYrjqXd5iyQD4N8oq6wFRN",
  "key6": "3zs3EZ6tbRhuqdKCGzfUDoYQ2zsti4bRRHZKtWnjHVRwCTyHw1jm8KKd5qw1vjXDVmhYb3qj1vzYnLCun5fQm9Ng",
  "key7": "4yTRyLkrvUx35fHGtBbX6nS6w63krfaXedNb25mPBpLkgWSNjtXLgUyrRr8bdw7XmRfbr5EUJjrvuXV51vJBLdXD",
  "key8": "NSSJ17Lv5JtFkHELrG4M44bfpnWv32eh7f5eLMwXot4i42XBbNmNmuK6Np9Bhctjc3ceJX686p4pNXEbNry5QkP",
  "key9": "2wvxguPPTnFooF6gD7CxeqiktkXQ1Xn16agFfkEzwL1RzVdPUDwYcJ9wFxSAstYnBoNoh8yJDSbahwHMRUXH2U3o",
  "key10": "3ovtULTVQHzezwC7XsGzMnqpGUgW3JDE9rsjpBknxvzhVCQy3AXxv9nQHb14ZwW5GHWhWjSYQsWU2HDnrjdweq2V",
  "key11": "ufMY3bFZDKoQSDkE1uZeEv6aKUbWSnfUAx7veSmcdTaeWfFqKS2PvsDFCE5FVyV2KTFwwnssJmvrp94xL1j7r6H",
  "key12": "4711zwBqYA2Pmbnd1nmtK9HPKnQCXkvQ9yCEzBBWTcunCT3bKXzWyLp8DD2y8NcdJZBaJeoSeirATfVWMjychqFx",
  "key13": "455SbLfrUG1CrF6i579Ukm87mu4zPYBePi6TP8JuTquZ3HzdGgzDanXQBqw271L6Mjh2MQ8fJiwDFBhVyRgU9rtW",
  "key14": "5Cqsoa87Hq8EN47rH9pWQdRaBWhvUhRXUDx5KxLAVKyWM2RVPcm5TmmcBANAYbC51cHDPpqUS4BJPRUegqE8c5xf",
  "key15": "nS8dw5CfVudhMsE5eBgSLkHpU8FzAFhyRc46mbScvoHAuGijnDLAbWyyUK6R2BMVvC2nxSQdjmDCgoSVzdDK71V",
  "key16": "25LHWeBerv5y8Y7kVroTxjLGMENJLooPS8cGUJpvnzxjfYfammj4DcP1rA8R9n4LhsHQxqVKXQrSU9yLG2FJGcJ9",
  "key17": "2t2ARMrYJ5hUYd4PfQNzxcW1N6ZvL93X3v1DKR2VRjbZaYPPZMs6WtYpYH5eKBN5GH4Lo9Ziu86gBv6Uue2Y3jFu",
  "key18": "2SCQv4XB66TYnuTacSpq1MxvLyoYUJRWhKSSNFQ93RFENBaDxfa6Mk5nR9d5FCxRXjaoPwhJB4t34NAXb83zB59j",
  "key19": "6RByKk8wXWwcDrWFbSyEXqJSZXw7AAbkLp4yHNVUPEyo6BRtZN8EoBMkWPBohjE6pgCfY5wtMTsu5ZBfRuDcxRP",
  "key20": "2sEU9qbUVQmPMKTuuzftAoUyJGntnNXftn6HUCVmxF2gnXvLwZLKysR1i9qmL15DPSVNUePwtkY6WrM61hyHphYW",
  "key21": "3kd6S9VNXtYf2S638qgufc49VAgMhsGo3odQXuKyjPSpRSfHWBsF32KPLvjGaoNfazoomUMaxrKn1zhjEM2eu3dS",
  "key22": "4zD9yMp9DZNsxsecN1Wu5b69KdanVukyXnwpSKgkzHVfq2cGDre1NqcAj83MxxUMSAZpiUt7q2BddGrJmGdBFcHt",
  "key23": "2MY5w85xPXcw8x2dWnnnnqSFQdAwCUaKSJVC7PGexyoQnWJV4L7soieMuoVbf4XdFMhhZyzGNDM69MZPwTx8cRq8",
  "key24": "2bpsRCdC9JBNCdMunRmAX2wH2gXSjheVSwJ6TuBSfA1AtMBhj2T3D6Q2wQ2KNajCf3Uq1rznYmhANvRV8MVL5js1",
  "key25": "5mjKopTyC6dJNDu5fWVGaoyJeKBFepJ6q5TbsQxPH2XSELDwmdE2JM8c8LsPKs6xgzGryJa6MEDBY4Jqk8u8uhBp",
  "key26": "3mhWuajMH4wpVtDn5PNyBYxDGxynTUPJcyWzVRwJnS6Nhyh5b9Ri2zT2YPTyhkTuumTqZu5GyQLkpbLtuLsfex8e",
  "key27": "4cYkLuJkNEmXaC17Ggg3gAGCcnufEy9AGJbemyU747Ted6cevqVMDgJ9k2MaFwSLFbBEj64GfbEHHHJZpgK42fsZ",
  "key28": "48BCNsoKFBet6799ssnqYBZ4Y3XCuM24brd1m73X9cWXt32YK1uMd7r9YRNNtwDC3hoZCvLDxBKVaNa8RaotdHnM",
  "key29": "2tcKVTXcQAAdibNrETmxZVJw6woP69VjPGeyHYs8jqPr2grVf4AAyEjvqGvpew2h9Uj6KVX3hkiYFdcbKnemvodW",
  "key30": "5GzgJxvQEe6Funvwys2EBcZEEjLXuCSDz9vDnL5HkUpSLxnMS6HYe8ecmQg6Zm9Ns2h5QB5sgn9F3usQeZ67ucgJ",
  "key31": "2NkttLzg5JDfuAEwcWwWyZzysPAv4BQ4NHVBqyCbyNPTFQVJqnndZdQUdw97WmsuYe4UAZoUQCZBaSG5WSX6ATL6",
  "key32": "63EfCEKRF7QSHbMofnzCkCneKaiW5hWUoZZ73u89waGa4frrjpb2BH8sqVLK2BKk79F21VTytS2N55QNdowR9tx8",
  "key33": "5PMvampV6nAuP19Djgj5YTu9oAMz4Uf8i7fm7smRibTm1B79QpTXGV9hiGCyQJ7v4YxiZF7HBVjKj7GCPZY6x31X",
  "key34": "DMqYDgR1oTgi4E28Nmf3of7GqEG4qE1shdprLuVbz899T4hRFB6ubHUy57Gu7eo32jy1apvLyZsb24pFdwMj62b",
  "key35": "23MSwBFZFxpL9FbEndNsEqrhjhnuXttutDwDkaas7Yiauw7fTS7zE3BdAz97kNUYdYMLQd954HVt3AZZZ99AT2QV",
  "key36": "4vf6NbKcscX9Qkwm76ZoccNzpJTBUfGnzHvdqk2sGjqLwnPa8zgtbLYtBpMjvQAiaJun4rg73fS81vHWxtfhcxaV",
  "key37": "47ptSQbLQLFrrmVYDtec5vgdrckwj94WKvrWJzerRY2z3FNPL1j3GUnTxxSBsXnqA4dtEXxnbG1jEQnu66HYDQyX",
  "key38": "5hecVe9HFmzEdY9ghXzSzYXmXQ2s7nAT9hZWa3TPwDVDAT5KEREaiLRpDLHvqatdsrH4cNxvWvHC2W9J6K3zJbzF",
  "key39": "dUqRbdk8aSePHLmy2s7CDJ8EdRZoSAdsL93KwJ4GikcGoUvwwcufUXbqBaVqoBaZD6UFEXzLugcGrqoT8A4pYGk",
  "key40": "2wNzw6A5kVQnrAASsorv3uHXTuF2pFTfvP15KtCtc6jVmt2LLT6f8eovqjRVAZCMY8yZEJbmobN1rZDuGz9jfh8t",
  "key41": "2SUvmnYWrRfbHeFiw26W1NFLGYsRzs5oXxeCBimHPPgAByMEng7WMbvHSUEptrTjSH4ExQC8jorP9ZjJ4viee4FT",
  "key42": "NnNijoqbYXLg4z49xRVRfqkbyBKQt3VnrGsHATGmDxQXvwypxKkNPujxx69ZgQsayqB7hGsY1nMk4pk4yM29pw8",
  "key43": "4WUsDxGJyocxqNStF4dSJ3wPTezrt57om5UMPbFTVVaxpsSxZTDZj1Y4yVV1RPWNTkaitpMgWyzxrcsmHv7kjatb",
  "key44": "5yoBzTWoHrppELjrweBHukjibgSVSEGtRmYReEsnWt5gy3NfTuLVZANGhMNnP6dHRBRkiH88yDgkkd73zqqnKPNA",
  "key45": "55oRffATC5YjSz7JDann7hNcym2La7nZruMrBk8whB9tgjp8jcjXkJo9W8QMgign1hC12sMSzmg2n6TNFGjtonQm",
  "key46": "4B5r7tAkV5AZ5kYwB2dvdS1FdEpW8JoYnfknyHawc3wibDhr5ekpieoeYuQEVPx3en9iUieahgCmiXwu8wq6Cipd",
  "key47": "4RrPSKmwWRku1nrHNi3i3MwCa7En26P2QEpqfeAboipya2sFqgVNaFuxiQ6XQE5qVGZdNtPu7PoA9yGsdmfnRRa",
  "key48": "2aAQearynskA4Lgksiw6fpECJTcnqZA6FrBnyoErFbYPuFQ4SbSYy3paVR28JUJCxatRt2hKRVvMYFeCmyZLGtbx",
  "key49": "3XdLtbfhTLNYY8HNbi6z6DrEuD3js53vr4JWCwiqSuWCGyizrW5YPu8ygU9eHEjLJD89dPss7qE7kwrFLTWHxApb"
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
