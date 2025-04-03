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
    "D9wL1Fni2PbNLQYMaKrmGNSg6sCX22iaqr1d5fuhqRMkfJ7peGovMUwXyPrkhuJ1bzDre2pQcJN3X9UGPYD9wpK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4oyUAfKx6UoSufZCHnauojtxBR9NDYn6VnMUVp19UGuu8QVJei2kXjneAek44TyVbQ1nm7d5Pypsw9tyqVy25sYA",
  "key1": "2ZmQC4X8jikjvwrLNLSMQAqZXfaF6kcVrHDGCKDnHFqEzP9EEVF2xYQh9tmxeXC7wbSAKQVAsXH6jg231LCCsLEQ",
  "key2": "614enQKguf9stguABXXAi9BmwgJoDwMk1569jcZLHq5Z4DTB55eWLLdMp6ccFNAJnBvQM8yHwWL3CCr8ywmGpwHG",
  "key3": "2XNRYBbTat3D3zuqaUguyF3WSvNQdchLVFytevovqgUT3SyipbRdhzCJncVyKmNPgU5uem6CXYDAAqzzkFNE6AVW",
  "key4": "3qD4qUSgb5XAv3g58cQmwVKUMdMnqyfimdJNpkmH2q7uzG3hpxnSwzivX6zgH3cZNKvcuaP7KW63Hmzs1P1p1z19",
  "key5": "3GwAHSFqr6f9ARCGiAaX9468d9RaDAbqdFoAwhvWHQ4qfBLBi3kVCzzpGx3KRTdjvztJYaidbh4dQP36BMATyrnf",
  "key6": "5NCpUajENG3Uefi2b5nnDPeKXA9Xzwj558ofqEXy7o4fXac4X2MKgYa6h64VRAUeyd7SAGosdSNwAqhLsksKTcB2",
  "key7": "iz69cwZbjap9dXvUz6oMWiEkc8T67eSCU3krDe6kSB8W29RHFNYy5EUZTHoBe8AJRRtbAmuPMbRpRJpYReRo6os",
  "key8": "5L5iahThQ3GkdkxQcALesXy8LLyorQkCvABWC13NkNk845vh8oaKesViB1sBXbXUWxmYhJ4gXx9UAsBkCzBMBgj9",
  "key9": "2HhW3cQt5BTs2fGKrFTkLxaqG6dmUngxodUVJ6VfD9gXEnevqpzktAkGfmARznpviWTVQ1uqzGJEf5biSL5rSSHf",
  "key10": "3jUjhsisHNYGWxqDiLV8fcQR53BU2AQkaGhdcRcEGCH46KkXLvJnLbmLvF9656cAdHobwrjYqJHm6Zq4kvvdX3or",
  "key11": "2EPgsDZNatYQQZKEqYBwUQF2EpiLytxQghPaTVpmUcuNRmNQ6orHd3Uui3V5WRUBSwNFv1zNngSiUyuMgrdPm8wB",
  "key12": "4AZbikjodtkLehFwBer5AA8n5deZQRvXyPdw2DvZjMoNTJVTXpfk21irZrfu2PazvBQU28JZCNNDpLTfwKSRnu8e",
  "key13": "61Cyd7oE7T8C7uHcTwMQ13F2TvVYYunfzU8ZwJ3k7YtpcURnb2uTT4azMQ5SeayEDVxqFep5eyZ1AEmpP4gi6z7N",
  "key14": "2qcr5c7XJL154VmPtDWm2Lyrcc4qBxbzkGi56UTjp36B7iPJ3P1J742xWgYA5dKZKfaSeCTtTqLK8xFY1UhSEwZE",
  "key15": "56K45PzSF4V8pbAyieJNccVcVTV9L2qDUnLxVj25UFQcN86v4q3K91RhUy88cVvpBA8wTAkp73gGpNEkKY93yRMV",
  "key16": "2iHicpMDYpzBDTsAjDnT1muNgnFxXY7tVevD1HfViQLBLRaTWFVupmCfKeytCFt3jFcAFCdXdCz2shGdZiGaMSkC",
  "key17": "5bo26oThdvCexhE5Jnr4qBqgBUkNctGhewxwqqZT8xUohubS8CmHAJSKuumjuWAA6TU6WXwkUNeXpziZ3m2hyJFv",
  "key18": "4jStYCPyx5X8bJDKvgsd5qN5o66JpzKhqsZ6sVu7U3TDhLqkbbJvJViYUy4UGEBRgFJ1vo5MDoZEobn9uZfEe9oQ",
  "key19": "qJCDmZhf7sEdkYeb2xwjFzhBPR1EiRvRUBGEvsurWAsu923nx12RTptre3UvEdLg2GXfq4Daf1musG1Hr5vZj81",
  "key20": "5v24b9Mkb95SUS9P2xcHWBpbi68zronvNemTsbHBjymsKZAt6cSsXcvu28WCLEFqSCxgU6MWNq1cAcmgKa3umuwT",
  "key21": "jAPRH4W5DpkpANiqU251CT5FMWNcEroZFFUxbN5nCYBpEGHNMC7RjftPmhaYAJybvDmK2ab62zyhaeEinhWeDDp",
  "key22": "TVDMG5BMeJbsW4VxV1F2cfdWZGqmxynDHHLN4VRsjZaJeZGqSujajd1V67cnA7tP877cgqK4jSS1NSikautq3ui",
  "key23": "Y67u8Nj4j8gFmifxa1qg9XGEQqmEZiFR8NNeybv8DsiQTqzXiT76esECwee432AqLojzmaA8nwCCgUonbvLjTjX",
  "key24": "yywTDc7L3hqBJv6JMfpGFQGeaJndqD84DsDH7uN4T57jKCU1tLjdmHRdXmBg3o5isrcmoWpHYZJJpkCmjhkqPFZ",
  "key25": "3HDciHiCjf1BiJE5rPWthfuNchJjFT9NkCCitmnq6wwgh2bsuYibz2jdEqvnKRZtrfiF2y9jXFckWRSajmx9c6nc",
  "key26": "4ecsEkWJDp4WWyR99oxMZCUcA4q3uW7hhLbZuejaCjAbeXbBkECpMptcCE9NBVkaK6Mi1uFyAb6fgjhipSzQhkqQ",
  "key27": "5Kuep23qJRQhbQTLt2aDcgHNPLaJKpnjsFXkTAF7bkHrUFs1RUfPiQFWL3Fh7dCBVvoodPkVDGpYyqCHBCA2Qb4C",
  "key28": "wnr25Xpujr4yim12LqU6NzfFLSZCLsrsk1F74WsbFCRP9Qug9CJ8EMYRdKf8U5viPTTZUHt9zooTqmSqRhBsSpZ",
  "key29": "zZJ25V1xggxcYBWsanBkCiPMT4MigVwauvREF3uqmKPkrb4sfTFCQFCE4tcTCFWuQhmHRRW6RUeVM3gshJzvnDn"
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
