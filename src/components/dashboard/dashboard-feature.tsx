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
    "2YUJjZKdZjgvPF5FqFwQRqcSuorFDasdA433hSwiH2oKe43mfX1D9cu1T3di12TKdPhvYEBDLbs9cBw5ZJkiD2pF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3CWuR34NZhgpKk1EhFTpzSgrWe2ETzhHZkb7KyBSLw9dZLc7MvWYSJDYeKkKzVcFHc9mfUgVRCx19AZYBi5JvjXP",
  "key1": "38p9imPaz6Fvu69pHEsYorWeDcgU6uRBYk1gDVP4XoMsPeoSwJJ3Dv2Ja3wagRv62MmEg7VL2VRnMCNwNgmx2kDj",
  "key2": "bex6ZDuzdMjTqn4G4FpwTnTF5K5FMcJsxRfhfqXuygjFxfZrRNfdzEEHfBzFj7jxVUcxRiFBnJ1B5112WYaXduF",
  "key3": "5vLV6u4b3vGkx7Syi85p55f96YMhpgdoSTbSURHrPTh38DyY5RYD22yW2g9sCR5dFAJz4PUr4wBBFNm5siFnXwqE",
  "key4": "2voAY1d9THE1tL3dcXd2Eya3ynkFTDFEnUu6doXGYR27tpQCAn4mDbHtSSKeTLXvtqDBWbo65xcbbz2BYZtd5VsB",
  "key5": "5fv6mGZrJLwSojhDFkgL2ZRyrt9Ut19L1RmUzfE6FLuygd5fNGwvx6tdgncHawqypCkVLtQkqvkRYDNe2eNTtMdP",
  "key6": "MEfdXFFWrfy4Ktjxg1NyQGPVw5f3PCTuMczTXr3dVydFhj7zXPSqMJnrhFdNEfVB5WpnLuB257g98Jjka9vNQau",
  "key7": "4HzxZKXGojRtPQVzmn6TgoowQtijaxgrDpGBFLwrh2YrRB9SFDB7qiHNTgzetdNhiTBg1o4ahwTHM3zQVJJBpd45",
  "key8": "2FVaKaGAr48JEJzqcrUbj31za86PPP6z1P25ce9HPyiHcitXQ3E3suvxYNmAE54rGEjqzaTt24fKTbEkar4gT9Va",
  "key9": "hFh7XYkCMwHtAaw8ranwDm6VQKbZS1WWYDXExMHA6ssdm2HWRU9imi2ezCY9TzjZ4wVxV3c91NtoHxc3srZyrEb",
  "key10": "2Kc3GE4EAL9NRHZhZ4KzsZbz48F1iiNvnx6M3qm86tGg7VwWk8pdiYi7VH42FWYWdRcVCJdFkGBgH163V3CCFxpC",
  "key11": "4QSqusjfBUrsxqw9TZpPJQZLaD3DV7sWCtQzyUCBJ4HbzjYNQPaRAXhipPimUqo8ytYe7H48nz36vDCsvpvnbCsm",
  "key12": "4U5pd5NgjZyATuaYbDWs2jDee4rDc54LBAwM1SuLam85YnjiP7c2myZAAV4zrbZqbtB24Cs5jD8n3hAKfjQcUDhH",
  "key13": "26miEn4b5y9Bs7XQDNrnA3G62FmNicKT9GEG7s5EfRbfT2uFP65cnBtokXRvy4UPmn4eCmMUfzU5t74nwqf7vuFi",
  "key14": "4doTX7TcVmu7rgAtg9Dk4xprxQbDpfLphu4KYBtD2bEru4JPC2KDqrFb4qTBpXPsc8QJ6soKG6jVeoywr6q7gzqL",
  "key15": "3kcuZxQTEEjmkZeP8evC68apfTurwnUKPB6H4abmD4XgxxNF1oYghi8nQffiM2tshYs9n8uXNgfyUrHpEqLRX9Qm",
  "key16": "21KSczkGPcyBMBxbjxwWUrnxuJdRFDkCQcxLkZCrzBibAWe2fVuTfjNPj22cFNXAZmN2BMMK14gr3qdmojpzTrHk",
  "key17": "66y4jfmQQr1XSAZGzVig2U4FaRm2sTsHXFrSdk4N9PSiYcCnCcBboX7CZwivDs28PAsP59hr4iGrYsoidgbWG1Fc",
  "key18": "3pyJxb1sUciZYAQHXjbBdGn4Ei8r5Ky8N2mJcGmHFK6QssR8Jw2p6Y1VYBuhkKzU3FZ95QzEpsj93vbZnzkP6fpi",
  "key19": "5yF5D3mrbhQkzQxmGJYbLfRm5GDRxjo6ocyRkfXGNgDmpxYP9iDTuK5rvgH2aBFKeWEb8PCRhu93y8R5ursNA4qc",
  "key20": "5RWogDWsjRQjEQh6sV4CCRxm9yQE16TGS77q3BfseGF5yhj9WTcKRjQeTiAWpzcSpQVv6Rj4gPJYiYkwKuLRgKzt",
  "key21": "3nLF2JMmbsG2yifnigJQ3evt3YgEcyTZUB57qB5zkV5sZx1uU1fg8Gb39b4sk32duUn6jxcQ4eAFMMa4URrePDzz",
  "key22": "4DMCrDPm3j6cze2juFqqpD5aaxk571h13ZTUZNQh5hdXE685Lwcp6E7NRFoqGGuzS3qLM3it8iqpYYuxdXL5SKnC",
  "key23": "3c9kngYezxea6WrhJKdHHsTzo4gu3e9kk3WgVh7puNaX6pLGSsmYAfPYJ2phj5JUd7f1CPXELuyxkT2RZ81w5S1P",
  "key24": "24LbZPXRDu4CQDeGvTq4YKruUengLAJvKqnLsLn6v7iJcs6iiFFK5MFLYWKJaJiqSRiAQDUdpSy5usmVdHJ4Vxnm"
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
