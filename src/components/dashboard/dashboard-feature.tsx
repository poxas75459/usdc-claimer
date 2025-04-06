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
    "2HoAJT9WNP8f7fY4MmiuiNLnBFnFdPaUj8wWQFTPgx3MUUTVnbkhivKu4bEPCjwsY2UzdrsEnUogPBefwwnzWphD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3MAzCBoc8b8rGgp59LD4SyWhhrS2FMeFgiQbarRhCfz3ykQhb6DYG2YmpE182rP2Qc9RFwtE84MAJ2GGhG7EEPfU",
  "key1": "1zkrATbqTAEKfYMpnGj5yejDq2yC9hYaVuHZ2FE2picQKRWeNJHh31UGEFeF1N9y8Efz28AwyxD3CqA4Y7fNYFJ",
  "key2": "x9RuCZ4xGuBTRtbFjw2mgtB1PZK5FEwB4Ls5T2pccc3S7QjU1oK6YMspVvaiqeAA53SV4jv5bb1piG1gXYyUbfJ",
  "key3": "3DZgM6CTHp33jfmFML19Yw9c7P7NYQg9YNeaaxSDzPmXMBNqihENHVtvobZCiYiUdQWWayopqJ1trqrVatQChLcp",
  "key4": "48bEhUMXrF2PxXoDyBj6W6M8LSMHR63m8NHqB7yoaMCQ11pLD24zA37TbdGiMBhBFQmsovApBs5N4MJdrjFYZVwd",
  "key5": "34wiSdXtx1vPbUwuAeeJ1JLZDigRWW854BsL1ur1mhcmarTqvDUJRFUECkkT3zPKHTroKAXVT4NPY5kJLMa4Fk3o",
  "key6": "5dzNVyvhKH39QgRRNoY15Ljty6ZaxnZLpfhUmXhtEFWJCF2Cd52zULxD3KNJ1D8x5R7vU6ZrXkognkjVsz6zz8XX",
  "key7": "4JsmMnt9zo7jeABNJ9CJgVuC2vvHu18hZQgBvMJWmU2J5mmvuz2YA7CeFovqVYFJGy7zgkZoH1uqMNFUApPuSFfo",
  "key8": "4FEXRg537KVJKkBnkvVtxuTD6ZdhX5XuBTXHASTAC3J25sCNhrrua1xeSNen8gs35zmkUyB4Ee7TMfeZyWeHJ75W",
  "key9": "2gUrQkaYMkTJDJ5aKVhUmRv8mdFTa8BcqGfotTdTvrL9GqyCdySicJUkZrcdqksncNyj6qfZ3bTk2tPwNHaL8P9i",
  "key10": "3XTEpvJT8MeEou8PzAM5dUfapdeG4gHZoRShff8kz21kiNsKo9K54DH2ADZxATjzRy7rQGTDVd8uUdNLcUkwuhbf",
  "key11": "4LeHURGmwv4SwYuRQjAcWt8mRgTLeJ4STD1c4QbzecbbuSUjZ8XwWt3fMbFEKUMUpj52nL6SvGd7ULqFsGaiFLC3",
  "key12": "633QMPBC1VVGWYWUqwvbLiVNKpZsS5fyZhk2m8jLtsYg7tgVQbHqpwK2VZCHtGNPPfN6tceJpsCGk9w5smPm35VX",
  "key13": "5j3Kz97ZtcpMD5LoAmAuGKDEnDa4Hcias4huXiPjehhr1dkh8RpZdApywFnVyV6qgT7Bx6Exd9Z4rQcMFoE9EaMa",
  "key14": "xDCwqduse7NARS4Vy6X2E6RvA8iBrWmATqpRZMJAz5bSiVpSzND7fPgQZAiCgnB1mmyh8dnqPfiFz3h2rmyJ9JG",
  "key15": "4haNcV5Ht3JEvDZ4YizEWo4yJeyDSpSTE6am8cHewCQY9C3BEnh8XGyZ1uaniWV4rhL4apiccdBrKa99VRRVFmu3",
  "key16": "5phb1VoBwZ6KdRGxyEfoNdHKj9ivXAXk86dbFRX5YVaH5Eb9Vxk767rg5zZmJzzKsUdpKTFjy894ws5Uw8ykGzkZ",
  "key17": "3dv56AHYEfajHkUUqpkqaFvuLwmv9ptwxsziCk3XssHSGazRGk6DuKiApw7qUq181Y4RBKXFEetfufeCCGqwfHfv",
  "key18": "b2JmjLx5DB9pqqVWLjJnsTRHR1HgLgtHHEVggdr6LQ2siUXvhhecboYU3iXQn9XaYKwpnMivDQuRTJQS1CoRJfg",
  "key19": "4NKoWNvZb6gBZEuDz3eiRPxxyzuKv6NmkRgybhTntT5XCUo4qQVUTFjhaSQEix4KYuDDiQtdMD332Ad5GSjrjycb",
  "key20": "4EFq5pAZ8ox6AmR3o5yrebozteUVLZsMhsz7HLyJs2VvoXZeqNfScKPV8J5PQHWFPWKjZkdKBGeaGjkqXXjNZGqj",
  "key21": "598n8X9ihFdVTGWL8ctbSmgTpQ31BkwdjeU95soktsmS7bJfjYxXcBqu3qhko8AqxrHrv6DsY32D8hWhgPyvrJmU",
  "key22": "i84DCmiGM9nvr7P6hb6inuFEdeMABkSmQjtoXuBxiuk4bYQBEpBMXE9gMGp9uJ8ft2bViC6PGj2QL3S2o53yG9N",
  "key23": "2rKqj8sT8jhBascDVEPfFrLEw3kpPsBeHpiUGZspjzvDCyGnytNVAuCg8X2ZLKeYCuJTVYPJ9x7SfRawiBXJB5ze",
  "key24": "3jQN5vALK6UQxR3vyW8BkgzDpwRsa8CWF6LHCdAbZTPTS46yZUbb15s7RvrjHQvLX3vg5bgdinKwuuFwvwx8P2in",
  "key25": "2FQkYvdnhjzPTj1rTvf4xTsGL4oGMLBQv993sM4rmLAjcwFzTouo68YCZ126TBAxAq3T3sHLe2kkadVhZyJwtePx",
  "key26": "yTXaiq14CaRdqyWQ4ZZ9mFvD1iMP1i92meuMSJvbBaaXzNHxg4jCyMUS9aYdzTaEjpuhNXbS8uaoVNxfRmABGES",
  "key27": "5HYGznCEQEUxTQdc7eT7VpVeHM3GCCR17erVwwXrgGFAQ5BrG9KtVNME6cwZLv4g5pAFZ2D77tV47iwm2PSS8RLG",
  "key28": "4i7aWR5Gpgn2iPhUnomdb53oMeHCRF2e1Pc91cFBAzrf7ynxyqyZe78aDS65bFx4jGsqJAvS2peqqNT6Q8TjVQKD",
  "key29": "SEFg35JMursd8BFmg6cCrxsWx5UaXn8g71CGzGcdcs22bRYBb4zvbnqZkRZ4xhm6WZRHijWoswn2JFbbzoMjKXY",
  "key30": "61NVkNgBBn3iA3aztFYUiP9Vg3qwuC3sDLpoU6w6wV1w7EVH2J1MmYrUmPnuD2SVTKHzxGd1VV7KQRzgjJXUGAXr",
  "key31": "PAZ3wzbNm3EtjENBf22rRkKM5QC5d994VZctzcKdtfeRBp9rNRN6nTeUUhojEEELvZK91uz72fzAri1bJV32tNq",
  "key32": "5sa2rb4QYLaGKTXifaiLJ3n3G47jX7YQst2k5kePFDfhgGSvkPWwbSmowVh5sGXdW2aMKjJZWMErprrGNzXTh9tJ",
  "key33": "2zGmD8reJjmGBLuYXyFdagMs6pcsuMuokFzTTFCpeSupU3jpMbtv9XVyXLfttrya14fHyn6LVAxVGJCLsPCVmdts",
  "key34": "5ynRmQ28Wx33JQ2qqGLMByWTbdz8BNkCUk8NQEuiogdboNqUuWh96pzT1su8Ukv7W3U5JdbFqGxVGm8Yxj2Fe5e4",
  "key35": "4HfkNBzqr77up6kMA7WH6n1Ss2X1hR5sPvUV82d3cbv7h6gsgiQc2UQLZw3sMfyfAh9U2sb27TzpyWtpCMmRcqpB"
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
