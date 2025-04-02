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
    "4C7pnvNm3nwZKBiMK9RzMEh12UWnZJXC6bNLkCgqExY8igXQ7356R6NFCVvH18UUxaGEwKVzH799rWQzrbCyiCT9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2qBvakmS2EqBm1kdQ33pMHDvtC9FQnvHzF1Ys5KbBn1zwoFMJmYULJbaSpDSvXQyK3EPP7zYsPkx8PqAB8AWRRMm",
  "key1": "3RVdADjhyfYcJqD3KxhSDYytXLfx1SP4yrmPvqSiKUw1Sy4YjPNkWH9mip7bqSeNVpk1dwrTjLNtXXv5sN2oMrrg",
  "key2": "3VEb2KNhf78MnVSHPZuNhTSFVim51QvTxEgWF3DYvzHJ9kKUmac2b9dhU86XJhznPjnk7dkhrJKuZwULnd4pZbk6",
  "key3": "W6aF47zHNgJK98LbuEnpTpzqq8Bq6erzRkw739cAWXpkqJv7HiMDuyvsfYNPMqVx1DwzNRGwFMJGRn94JiwAads",
  "key4": "55uVkEegzMcd3n9d3hN7KXCyYto2vFqsVtZHGBDdiVDExtGK4PYWfaQnLbS3eJK2dkRQt61mvJEWkqMaSqFUZisf",
  "key5": "2MCoJffgbb3vWEwRmMqdTXx8Jmanc2XaWZcSMDsDsaUGgEBrpKBi1Ffu1Juotj6L8vdtm6zQ9NFrWpoBapueM4gn",
  "key6": "3XpyERpMdZzPhQ18DQhwy1NLh34o8pZG3qqjBy4CZcpb5EE7NrzubdRtGyFbc7U2xiVDNEr4DiKyvksqVroN9c9x",
  "key7": "49TfSkp1yekX6CgaEPNFpaM1rwKEwDquY3wjsCBdWNFwHtLrXtJtr2BP8Grbtjb7YUDNZLVaUwPy2GA6w2bXdLip",
  "key8": "5zrPrza4PmAiaFU6Njt8v1H7B15pNP9GP5vb3d3b8rS3ZRVVjd4acDRW1wgxRu8w6fNHAjPMLRcsavsxahBKJcXy",
  "key9": "52PQAdG9MkP7K3LYZjDnqnFozxpbHoVeXUyeeJgQe8HjyiniPKtM32yB2FoxobQ3S8pFYrAMUZAW3rKapWTUbTRQ",
  "key10": "3PX6A4o7jJDsXACehzj2vnit4EMfwt3LKPi1jfzE1cPi3Y8C5Zov1bUESDAD51HsnyhxeXrFq3gFQegtE2hqRr4v",
  "key11": "3CLtfPaPU9qvsTmvzfrFg73VCpNiM1QzjFSnwzbTqY6GaNM5HEuXpA9sHL5Urpjr7CLzBa8TXh39uTL99k81Db4k",
  "key12": "6TZ68WeqdSknwRnDp8gHLqvL3cwtF9hUjPctaR8APquPFsuS13WzfrQ8KJEfUS5ynA5U8TurYofZ58ohv26Mwa8",
  "key13": "u3cqwLMv5xbQcWxuTEq88Vth3sWgFfViBGGe3TqYG3P3WMB15kU6rDwCRCLiXH4TLqCi8C9KnhVfmHowhMY2WVd",
  "key14": "YZM6YSs1yJoxSWWTis6Bsg4tYHixGrd1hRzJT72av2BfqXREjtrSfX6ohbVnKFN3qopT2KbSg6d3sJUdGt58uVF",
  "key15": "3uBSvmueAe6DeTLiyj2scaFUfxn7g6tSS13fMbAcrNEiJXfpNsduecsWnzk2EwNkN8X63yEcNhC4e4Pmen6jbgwR",
  "key16": "Sq5K8FxcBibVACdCCkB8XBEUQs8KAApc5gSZ99vHoepxvvHL8jfWnrD2qih2RFrUooexLLotr9PMSPK2MDtqNEe",
  "key17": "2nMLHRv19Km246kYQPi5x9mLtm1RUbvH13V9x6D7v8Vx7R56Yc1DrwgsjngVuSbz4JSHjjM3EmK9SkRmv8pVfweg",
  "key18": "523qkofjkQX1DzRvpW76qZpBrHz2vAsgDvNppHr4fmGz4EaAsyUobZoa7ifEFSW9fhJz1icrFBRyavphs1AdfeYZ",
  "key19": "2roRLypunWaybeRgrZQULZCFqJVPG6GTY4AQnBcir3yigFjLyYYZCdZ7wLTHfJ5YyXQjwYmugq1cibCX3qiFsJDt",
  "key20": "2SPFtHiqzGtUWSSar3xdyBFRFJHtH2E8h4k7jykePgv55UvZ3pxr6cpxW5yAcQewFGa9qDskQ5RqtMBjHjxk8TtF",
  "key21": "5oiRvaGynnSd2HNyPQ8bgUbpTbQRpj98eS6Cq2xWcPaTY5PFvF9S11iw45dCMLZ4vmwwwqRg9YYPQ2FsYMxYJDWL",
  "key22": "59zQ4ZaVYqWtX9XsusCqwzRMRhacug2puVY12ogqxCtfV9EB1PyG8pbdubKVMYtagdbN96JkunhFJ2ocKbGkjLSW",
  "key23": "hJUQzdDSVxmoSK6fzVNt5UYsbwJWyHgWdqaXoEf3fRQHRmMMU6HAHb1oUNFVaagnDmP7PsiSCcsH7tLD2fj1M4S",
  "key24": "4y9y8T2peSygpMgzL3YuVSusQEUMoQU8r6aCKJmpkpPRLbY9KtxD93G7JzzMq3d5WGwRSAq8cokoz8u4oPcZes7d",
  "key25": "BCys44y3GLkz6o9iaso1vLDrFP2PnU3Hf5AX2rpr9WAkZpsdokQexV3EKNGmeiEXXH9BVRfQ1w6YKUkD23QbAYW",
  "key26": "2aR5GxVu1MVTA86YB6PaCm79jkJmJw7sVkkT4TVP8j2Q2YT9d7DWVRLnb4YKh7P73W4o6sbmZqLnfNBZ8gWvuCEt",
  "key27": "Kjm3ioKiM3JauybaiHTqvdxJi2YNE5dwkSp8C8mDPKzBi2f2ZmFSCgx2k2U5JnQVAjPt3R5McLsw34a3NHJTrw8",
  "key28": "WTShTZD32iDVFdrLWVVY3xtV7zwGpUqk855MAZpSgRXRyrwUQF9AT4UChNcvzm6sscr8AKk4tz6gn4ccGxdBSmy",
  "key29": "4tDXg72MWXGDwQCLnjXCCR2J1rKywzuPoUFrGcbAk7YURXnGMFDRBvkRqCKJJ52KXtGNFff3291dgzARajdmvMGt",
  "key30": "58HMUdRuUUznqPvpfDb6ny45kHMJCX3w2AtVJtTAYi3J5LiUbBaH8YMg1eaFLaGJQQittqnzLnGDmFFkbfoqtN9b",
  "key31": "4SJ1mfzEpXmES4C2ZWJEfBXwe95xMLYBjE5AFWn4yqLh6gMtkusrt2855PvXswJZXJwmX8UWbciNcBKvpBx9S52d"
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
