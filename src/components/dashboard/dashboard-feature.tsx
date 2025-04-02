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
    "2bt8sFnWeuwzvYzEa8WgQDx1a28tqftkEsJ1S62JwhE3ypZPFZ1VJ8VfqEQ6Sh6hfbBSDf81ttBDXvNbUprVREAF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3cNZfezgf8i7dvBfhLBdHzszwQ4qe2W7wP6Y2nNo3xz86QTUGaJUE9ae9aLVxRT2NdHC4VvgJtJQnGi3caBTgkJQ",
  "key1": "TfQ6QkvuRAAiMMk9KEWKnUJxmWWUHyH5J2dP46oDcFLK6gXZ9eXLkhkaaD1odRN8gVPKdTGw7SJ1vfhBBJJXKLY",
  "key2": "2NeobhyMWJPHR6NETzFax7EE2k4sFpKgbQEtpHwCsaFUL3uzMq3uo27VDcTnJpwgzhzQYz71uS7pGa34gnyCUpZr",
  "key3": "3LEfTsWQKJ8ZdCZ5goEhmVtPNQ5Bd2C2USss5JChgAEdfCXuXAtVxAxzumKKZWyeog6UcJtEX9yXrkKY5dXfenn5",
  "key4": "5cGkC1GaMiBgjcKgqJotQph3ZqkmMh3h4Lifrh91zXMadAkpF5MCUTQSnQhE3spEkuMTCXMWTMtQj932LDmQRNqR",
  "key5": "3WXGocoEBJZ8koFbnrvoAbcE942G1vnQByo8LDFKCNCMbtTb2v78BXkjmJiLcKVnfswioP5cXMhrEJf45Z1Lwwnb",
  "key6": "2PcRFzuECZTzHw8WYWQaeGu9LGuMF2RUke7L8vcs8pVCqgpBtx1A4ysnybHCQdRTfd4Y1wMpDsxBGreixAUy3VAK",
  "key7": "4AExrgnNW3th7k6EuYN19TmSgT36mK3KNa2VatNK9akJnPFx97WgGVszxdhbEM9pwFw3HcLdSGGCdH1etAv4kfLo",
  "key8": "2UMngWmmX13iniAiJqMoaPUZvMSTwTqzdWtP7io8TVTA4YCt9GZwFsq9mLYXLvQj398J7wX8dcgDA43Z3S6pZbKX",
  "key9": "5ay7jqiFH18zyyiqJdU3NyNp9BxWUyRqxJCwhi21FZ3X8djCcCNstSuyY5zHWabRfNhWc7RGHuH1T5j6Ph9PB9bB",
  "key10": "59oaTqhv9bEi3SPRQGrSyL38kR6dp737Rr3tgB2jQaTXSUGmWMatMUqnKqkkquHCtKEhPCx9nrNBDmjJtj1j9yV2",
  "key11": "2eBm1kXnkJpxe2XJpLvHAMX2YCJQDndjP4GzzXg179iaLgfcGv2UzFLeVoASRWjUfjuwpbrMPmuVarjTHUs7g6xZ",
  "key12": "jeXZoX7qtgMrvZncL4GLvxbX71SbjAGFpE5ASbhyucm2uKX5ANij1KAwz6JbudhtPrQRQB6CmvnMKKNJvLqZM2m",
  "key13": "2WS5CntWv7Cpv4FBW2mDG2UuPQoXKp3HvECSWPkdrc2zKofkisaHrvWNcr9UWLuSek3Y4FXqgTHuM3R8rPcFe69V",
  "key14": "4L4ZBTNxmkHgx4qEAPVZm8xv3ayeKWP44ezfYL5L9NxtxZZWzEgs1sTDg2zj2YaRKH1Rrh5Ay4AP31MQrpbjXdua",
  "key15": "2JezAtuNJ4VPDdi6xmKSs9jSRkhSR2L4pC6DHWPhCKMhSuBCQqLSKwe93s4Kbdst11B9j9TDgQNBNS85yYaR4jjh",
  "key16": "2EaxBEoZzdHj8nAMQnyrBBNK5PHoY8JxwdjK1qv9W1pS9hr1KcQB4A22hNnNEMX7fty3Zr4ziEnfgvuRbu1ufiej",
  "key17": "HYmWdBi9VrtpYWKBivMjbdSCtNuaELocw666hVorMpw3DptsWBht6zrSPRKvcAc1y61t992VKZiVWwufxEqhJ3H",
  "key18": "2uKAaBvawPvucy3TxKKqqigXyfWb7DTBmdSwquWxF51tBmtyek69fJXYNDCFtrdrEU5EPMTSgBUM1AYLn5dMBt7t",
  "key19": "3MN4bJdn5kFEZC6MGqnYYrmRnFMEYNaAjMhTJYAC27z5hBp5iUQ2X9ybtGBNbfyLKJuPbbAPjeNHcXPHmBcc9NBM",
  "key20": "WT3nRzHXFGnoJf2S2TQpsCXr9DapE1tNksdqr4YPaAmVZqNYtLZQEKnPFjCkX5q1rqfFwNRke4CXWHCLPyEwdFE",
  "key21": "4QYP3JLqHRdm34aGzF5EHC2UuDyhXjnnbz78nKdxU9nRx2bHUAUvoj2mV4j8dDGBAqvKQTmKGb53DR6V7MCKuzGb",
  "key22": "5YZa1q61TLQXesr8qcHtGRK9hh8fhtpHbVMhKjjVieWttbPNYxA4rR96X3H2MMK3u96Yu1rHvEoUHP9NBJpHxEjj",
  "key23": "32uozh1jMNkDLrjkhBhpVmYCit95KQdSiGdpEEAFv9haGH5z1Fe3LCzfL8TwRmhPsJseHFWmSXxcGk3qkV73nHaV",
  "key24": "2ZSU9KYKFQ8Gg9rvNDs7sxTAQKbBWCRV3oByGh9K3jy1V33d9kHSPreKxETGEXfHwHC4KUSYuc5jfG2As7bt4aNV",
  "key25": "WYah21j5N5Tbduwpp27Enu26iZ4MdM1Gsdm8E3YLesh2hNwpyz1btVQ4hSNeGYqEFfhzbZa9PhM2vXs3Z61ysdv",
  "key26": "4DybZYUgHw2cfQSPE3eyWG8fc12vwbUHz4jcyox3RSAapi2JQPyHPJiQSqnUohy9id73fKU5XDWe5YGXYimVjspu",
  "key27": "2dcafpt7ot4UidfeDuqqKkLE8F6bzHY9HuvuaWe4UkR9eXWUrGyu2opxHqnbqWmp4schuCkN44PoRm3UoT1gCEch",
  "key28": "5zbYu1sEztLh12zEQKh1zmDq3dDTsW1iKxyLvBdDRe1PPFFcdeAErxcDVw8nMvFjRdn58rk6X4HH9mugAf1ZDuH",
  "key29": "5oqwiCmqKuGkQ6keXPGZynsBNievPXw2LhhbPKme7y5Y532A5ci2qdMdvpiu3Lv3NKMyUXzhrJjk2yGoNxam71Qb",
  "key30": "4gi9H5NHWjywCrPLreYV4LbSnbVxxjnuLiUgxR7wTXZyLU6xQisyXoqNyBXt6KJaeVtFueqj12WFvmFK1FNdsAV6",
  "key31": "jxTiKS478N8dhqyTTBft997uebvUunFCVqRg7ZAaE9re6tPSe92nv9LGDAKTfhkYoMaiRpt1zQTLx8rbExzA9jT"
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
