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
    "64Mgu85KyyfqDv1fk2xi7RdYmp8eDaK4PGY3b1j2jY9SZyiPUvBZkuSQxppZkWq1dyt4cwTxmUznFbpm8uMKYAQi"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "PBwQw8QpipHiutV2fP8t3MggDEVQaGknyviqigHNj95Hv36QS6pXxeGAhB2wbE4Nn5ahHd3r85ZtNpjv7WWtrYs",
  "key1": "2Ws7cBzafr9yyACvxdGCamh8wyz8PcUo7wmrgM5QugvfV9qbniBMQoEiZ1qYpD14Uf1LgrUYxKe4skhPP1i9sy9k",
  "key2": "2qp6nLPVT4741nKEPk6CbNzk2aFjPPDQjTTX4YTpVZjptBsukbvZpBvSiqCqLvVQEQSvCkVW1C4PwDjpYULYi4o9",
  "key3": "4G4S72vvJb91pr5u1nL3JhoJnJTikcLQYcGP34sv6eiqjJ2xoXPSSkZcMTkJCPaDhiLRRoWzc19J1JbQFQbgZoVN",
  "key4": "HXayaN1Q5nCwq7fvEWagz54ec3gtKxhySCgvr56UdrsMEv1bKJWY66BCc4aqi2SvRMvqqx6eWmboZcontLvvVgw",
  "key5": "2nVixt5FwJ2WPxBC5puBEjfvYNDGxuerY5tj8mM5iuWEEinT59tWGoK7eaYS548dDpNuieRbKcJBeX3fNFskCLrv",
  "key6": "5xiiXYTNyLkNrYTcU5rrKNXP4Ujjkbx16LuWMGpEcz6AdTXf3E8woX8LLus2qQVbJo6Ue3reiiPRfKa4GF5j1W5w",
  "key7": "FrWk9JfSoF5AocpPBUWzm1twVpMKbNpor5RgCPphVfUoMMoGXiZfXSvgt9v8zLdeWDXRBZgV8N6YzGJYgSNLRmX",
  "key8": "5FeMdhv6NxNK8MDKqd7S6VyD8DGM5ooqD11TKGsqkdyJqra92KERzM8sa6MjUcgiFkcrmUhyYwZ2RcyP3qcq3UZn",
  "key9": "5qiXnGyea5gYnBmTKLE7wGmGp9GgSyRKYM1BboRQt8aKmLKf19dea7getoZJEUUn2CT44Csh9FrwSV9M6y5Yj84S",
  "key10": "4bLNK1JdxTWr8Zn8zR2mkNBPyen495oKzt6igQmc2GGybWLuDsKxpdBNVBbiVGyDc7ct5JGG3uYJUQc5ZUDxV3gX",
  "key11": "4AjeRPJGDGACXyfGQebYSya6mcNLMkmJdpTqBJj1TPY7oVE2EYithxgDP8C6LHSoQiT5ADAcavHCaXouzNhLfYm8",
  "key12": "gfdDE52EmZso582w3THu1qXGvbsN7aBUXV4MZo62VaWTyZaUWuMsq5sV3MdYCsmWtFFHEiRR2L4U66cvM3zB7G1",
  "key13": "122C5ZjnQz5QRnnAB3tXEbTZErpWN81tvrMHK7qwx8rUqcUSTjuoeWYJBRqpGtNwur48oYcxCfsGYBZkNYB6ozq8",
  "key14": "4UYoRudbetawbQBBVyofRcWzDJjMYr4k47whDzyrimAjLCK7hEZJ2nbi26m1uWSLQkvVBYveMN2itSCXycw3Lzwa",
  "key15": "7N9UJxgU6Nwx2KJJcqJT7FXNwZPSYntG1aw6VAxcUneJ8KF79HYvWYazgBE9i5g9SwqSbnxTneDnea6h4VyCaf4",
  "key16": "4Z25L63SKWTLWGzbRCdtBd7JNJRFsrXALpeyUmc7t53xRDfa2hM3WQQ1FNguX486SuHwQCgr9fB2HzYJrZbzRB2H",
  "key17": "3NVLEYXzcASQewaKXj3QNAzxGb72VFHCgHHzdtDfjQQBzdgoPc9y18UsfifJyAzkftLHgZcFuwwB5zjL1eKNEk8b",
  "key18": "261jGaVcBcEdEh5UrHT28bDpm8FdmTDXTVTzUijwavhgP53Xue1PkG7QDuoeiPGvkKgSecstL53bzBaZ5LMCZ5sf",
  "key19": "4FRnhTdwewHppiLDyvs1kJ7zQ5JvAm8C4ykxVJJAchBs67qSBMtEj5zSDKuRTzk1EUXhtBC6nxS3QnKeQfoBvvE8",
  "key20": "5hSPnGEyWP212TqptPPdiysjACNrSA3yFGNgLViUMSt3o5HY7A6hJqFFQVzjoZpY1N1w7xeibAvBFYRvxkNWdPu3",
  "key21": "5xiyVcoZPfmJ7DK51QojiqhHBUv7TQmzLUj4xdNrx5T7Fy5gQ1ba1byqKN3vXtxqoUW2C94JiAqUUDztkhxDfit",
  "key22": "S9CvfxC9prQsjbFayDtqUZr8upsndAUFhvXtkdqrpaNa8cvDasYPMYLZqZ7P2fduPt9njyTKHeqxC2auqQQUXbk",
  "key23": "SvKSvHJnNQnx8ALeuFduZXHWP3aLrk2TQmnCBMBC1pPb8YMqbReGDALqPJqgRTS6JsYPWvLozEhyVR21yntmAMY",
  "key24": "3dAfHwHv64uZQDvixkunQADEmBRGZvjHHZCXkkKySvWr1zUtPehdz67DyZWo5vj8bp1ybwx2SastXDT2Nmjak9vP",
  "key25": "NLPwzmg6qkTAtnJPYkwEPYy9tfZ8U27LxQ8RypagUxAQsnrw1yYdbvJBiK6ZpCnS7w2vuNm8TKKTpXqcMVhD19t"
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
