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
    "473tjzANLXKxtaqDpuTJYpA48exSq96v1KTooVf9S7fqFsYx7h3GugukNMukP3fbpWaV1ZLut2ZNFJQ69VPi2NN8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "VbiQY5Qp1bhFv3gLJma94peFxmVyTBH4MqBkum8P2HUiggE5hkLww8eDcPJVtJwNnhF1LTtBKMBS6bZG2gyFw7q",
  "key1": "3ws34eNqA5oTCTuYQi2gudsJ11EcWYB4Cp8B8TNbo94AKEC83dV84cbtYt4h2o4eZBdbRLeSBy3dKdovAx1jCD5a",
  "key2": "UsUbA8mkpABhSq7zYU1d1Qu5yqEqJMTAWA75UDYMM3aZDqRgSSUMo5f3emaQkah5bGmiRDEZRpYUhAS2Hsjg9am",
  "key3": "5vSytt4N6aEQUc5yrj94zBJYyXB5LAfcozMt24SeEZ6oKWCRF4C5kHTd2Ur6kGUPv63vavsd2avNkU5MUJ53mmRh",
  "key4": "XVCkTSTz2kEr76ihL6RGfYDoPbFcsbSZbqHr1tmVY5mJEaM9YYQGRsGE37uxcep7Yqy2zWT7x7Q9jZavA9eEZc4",
  "key5": "2GsYU7zAKgcbYSa8k76asEnfHRYK68X6nuCC5493M23qCn4zMmuEM6XXLztB18NhNJLXqdkmSh7CfumAdYyVaUXd",
  "key6": "5NbQkaorgPNDKjkMWtycPLUmUH3Q1dkXN1KqAfEE74aqgVNj8SmXP827qQUvvfKujq1gFxxax89JUWj1hMBGJdMk",
  "key7": "5GedGtkyprxr7GDWucEcKr32HZg7454XUGLACRqo6Dt24GnK9XzChA5hWTNYBEFY6rdTMm3jQnc57icuv9mwkyxK",
  "key8": "gDpJ2jxGr8bFoa3iVM3QrZz9Eiy1sxJZvBEqPpXanvVT3eLdTQoVMZfQCjWmySHxkAPtU6MWAnqjjhHw6vCDox4",
  "key9": "3gwbr2nXJsXGTUemRzVvSjBn4chyPoqEqPy8xeqBzRcy3Z1SxtQXbLnh75WTDUjrRG88LrDegFj9WBea81XyHxeU",
  "key10": "56uACUaCRq1Si2BzX9T9kJEc6QCXkLhrP5c4JheLJNsm8YuweQWJAXFYQRvDRLpr6HYHfUD3Wj416p9oGeSPLs77",
  "key11": "3FgmuDSFTVtuxAd1pA9vUXuBgYcDfJ3XrzHxykhRbdvQZ4z9VVmV66h5hNFNHVevP4zWgE4zZC5ZbRSaeaYekLQU",
  "key12": "2Y85yKT2M9jhi9rBEGidu1crJyGSLZxPbg8jpW9GSRvJea3XbJDx2BY41jb6xZFMibr1XrbS4JRvqKGrY8tKtxTC",
  "key13": "525ZS836LV6igxPi1hEDUkBc8zNCsh4YEbCcJQLqJQj9nCd3ng8EFqBZDJRWneqAabt5xMTKFQdsuabjjumKx38q",
  "key14": "35Ty1qEvSBxcyizFbvJDyfRhZ8PRi4dX5MMtqX3Wj2xQR3oij8dU8SivJ6ntnryqjBuudAp871vj4Jdw3geoKUJ2",
  "key15": "25ziKQ4JZ9z8Cs3PbXY7VjxE5HQWRR9JahKe5TgdMLWjA1t5sdGtZgWek4c7k5vLuXAxr9SkF7p19XUrf5zR2omA",
  "key16": "9hdBG6SvFBMp5FDYsKW7qY2i31fUXJuBt8uFALrxTX5pygbk6FsuKqyRkL8VDWdmtgFzw8CJfKEAnjufZsD3YiR",
  "key17": "2vK2jdwJY9BKpygGx3PkyjQPqUbQg6ubVSxLkusaMvjK7My6x554k72GEi2xrVsHh1a64HpQ75A3USFPFkaNKney",
  "key18": "4wdVFQubTru17Amey7nezJmcbWfTssRtthFBLsduPA6FWCH8EmyLWULfr4982mTWdX87wMdEys4e2MoVz9RPbfF8",
  "key19": "3CUEp6RfuKyJCUdCqpgnjBhxiKw9i3WMPDGoWdR7bMs3aUbb3jpBhFzbk2UUqqqBQffMTbnkHskN5NrFQA769uGk",
  "key20": "LBCLRZ8e9SxyVDHyCVe2CjJhtUsVYkzPSdVmDxWtbyRnMhMQQBFSMZLt7yTX1NLJAiCayUhStUNdHLcJC2jzVQM",
  "key21": "5MyRS9saabhoyZrTchgaRCREpPsiuQ2y18bZuBnAiissRfoaKSRnx3CPUZ3nUHHXDaZhTR8aVPgzpJpFVx4cFEWT",
  "key22": "4GHaDXBvoTVzYAXdhxdy4zHJ6RiTpYx9QkPK4N4gLxkpGUA9DSPqQt1KnSBf7PGqcC7UKcx4X4upxcUxszDxwtvZ",
  "key23": "5FkXSHuEFvqtSgF6ufLL3RJCkBU6nQvmbWJNK7KTHYW4fyMeeToBi14LM3525mbr5mbeuRkJnCD9N6jAfRQs1955",
  "key24": "hordsYUj7iaW1iUbQbBwfQppyjEz6YvkMn8wtxzXvwghR5tSed3tpjwfihsxHu6kN6zvVGLYBPrEfbanY7wC9NE",
  "key25": "5g6DExH4zVM5r3kfKvqNQcwHKXMjA9psDeRU2kbmwJ1SLXfk5N79AqN7xbWf9yuebXoKvEj3ViJgu1kRcpStvAD8",
  "key26": "2YedZqtsW6A78rXyFUHSsKpUrYqFNvfQ5D3ycTs49FL1Wfq1U7y5BcTzcAT2YpNYticEpMhmenEnX7vdWFPxSTfq",
  "key27": "2Cqqg1fLnJdn9udWdhQuZTp6iYRrdEfa6dwHH3A1Q4ipDxE17WQ2jK3yNur9si7gNrJqz3F88dqtSuh7Tg18eyWT",
  "key28": "3VCucNQtqhFSZgVYSq7BvjExAHkcAiUrEhVyumwr8nGkxTrePw3t7yxvabm2598J1LfHaqXLFfRnBHHrap3hK8oZ",
  "key29": "316cQaXgeb73dpiXygj4okJEPDwhW1QA4V1N7TnCxuBgFbmDS45sEe8YVptxJn2NEPzwBZanvzQT2UEZ1irtCXQW",
  "key30": "64QaQqyS6F8Je48X3RGxuppMzbEgmxJBA8tUFqnyxK988yZCNYPjqyv2y211rqT2HBmVxcCQ25P9eM3AndL3WNVK",
  "key31": "meyNiJSLCnBduzWJhWtmb3jdKGV1K1D9eD5n4VFp3G7GJZ4X29PD2jZT2jg8ftmuQkZDkuCkKHymGq1VRZujuKo",
  "key32": "sNQbSfw2ZFxZnRoBXVjGXSwD5PnanSeSDjNPJDTiXhDrWbe9pSrUQ3m8CGwQzH1viBgzSxo2bN4WCmLuwCFcCgs",
  "key33": "614ZAHyQGAG2CmuxX2YhWjPUJuBKhR8rCjzxoZfJdQjsMmj4VPoVRwLDqSFf197qE5DQrMnxGTzQgdE1zgzsbxZc"
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
