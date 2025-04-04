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
    "5sf2i4XRFJPiG9PB3MbvS1jynDLhDGJjcWA5T1GbAm66hZXexUHGgWbbtZQqRWQenQhGkP1ke2i95UCwtJtJR7Eu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2RbjVPX71caxbTKA1ysggtKPMSUgbY2Ck3eNTik45J7PTDQVRTjpXgRVLJnAt4QDtEwBR31ewJoBqPYNoRT3TnGR",
  "key1": "4XtwkyXQEZpnLTjxmgnEtpzLTkpxhGT8nL6EUHW19N77DbLZGCvUJryC1ojT3ccQipsqm88c6Nkadw3XSMpkoGjX",
  "key2": "Tkuac4xMt1JWUUEqxC9JZxNiQhJSVWnCie8BGq3aWbUwqNvisofvQGwbDmxJyYnUyhFRsmcCGeph943b34hN2US",
  "key3": "5AG7PXFE5sjNUXLpbkUXGrRf7Yg8NqE6yXpNhSNHVVDUrPc65kWZP9LxJngUDxsUkhTv6c5fGTsJ7Q7TRxR9LB6W",
  "key4": "3CUxpjCmKrvUcrxseHivWN1ZGyFba6hrcGr2ceWNiDEiLsPVjL5nym4i5NrrDY2199Px4PiM9RgwaTLp4xPRiqch",
  "key5": "WLBCKNFA3Wbg6HD4uKxbb2UExErQafGh16rHZUazSxQbRsXgEQr1cW1xixzYUSRv5ku5oMNgEtTbqWhvc7KsrpY",
  "key6": "3BixNLgEQeYjndrsexQF6Fp8GjBvHFyvFkP9KQqfHC12ryWVD8wYJdgcxnaqpRtRRwyaxa1G8aRu3yzbjdFDi1Ap",
  "key7": "bQ6WBGYS2VzGtzEwFFqxTQoaaiTyGcBVPKyvT6nbijsEwYMZLqXyU74aDBLAcHd4CopXKVJigLyCJUg85LGeoMW",
  "key8": "5NXdNGQHSL95XWWZjxJLYULd3PN2VZd17MvHJmDAczMFJqgTRt8AKNaHo8BMhEPCUshULnxmuvPnCLKTkj6VRGMF",
  "key9": "mog4noS6QqmPTW1o7Soa5Sqy6ePS7SKSiU3yu7X5oUgNHF6ZW47NfeSk25mfUgsL6bWhBVWbnj2Fb9gCUFM2gM6",
  "key10": "2jJyNCRC1fz2cpyeHkQ9ig1LzdZkM6n1EwqUkb7wSdnW15BEKjetbu2tXGo4MXgePxfAsv2KCvmkFt3WrNwxMaNx",
  "key11": "5mbYRgRsv6Vc9wXzBzYQiF4fqUy6tu1fzdzTNskyKo5GNwXC7BrrEUbSqRhnP119uHWeDTMEp3Fjvv5XzVXiGjJ9",
  "key12": "3By9Qmv6GL4aeDhDefEUPGXMZGjzAheVtzamQFg9kC9qmsQ2zNZfzqJSoEHFxYYcRGoLoPbmapapMWtmPPFaGADQ",
  "key13": "46SpFJ13ZBCZEj6HChahakUaSBvo3M74A49SfiGsBHTiQ6nNGmwFSeu4tLg6JKxAcqFELFt1oNKrLDLu4DYNroXT",
  "key14": "3NBqUXmoVAVGCiCDgdJawgJNBi7zwvhpFppfu8Rxdp3WBd1iHiFgaB2tfnz2JF3q49pVpbYHsoQVD7fbjzSBkxDt",
  "key15": "zziPhoSoxdoBQevn3uwHgsfm8ZhnBmZqHVuB7ov6DqYYzGJQn6RN8DZxA2eX8M6mGR2F3aB3UiTjoFSYadiqZMc",
  "key16": "axdRzzhzeC4DPcNijFAqw7LRByjUj6ubo2RejScr3DyXJrN8AuSqaD7shF2MD35DqfHHH5x6yxnRLrcRicxa265",
  "key17": "57HQzQZx5ey7WwmTn6n4HFW3Ykr9s4Mk8bpGS4LVUHSQbzbTHeKm82572852p3G7Ng9UC1y4ZsagPCDdqcJfZ1wE",
  "key18": "2h3tm88tA7ANs5j42ix1a261LLzLoXuM8SReMa8QgBhh5w3RSnpBhDCVTYBsqwZYYMHxitLrS3kXBXN2U4sZN7Rz",
  "key19": "33S3Q7owXHTzVtTL4j1HYDmnJc6bEHFVxp37DbgNGAgqC4scKkXSAqWr4R36Lt8xJKRpdTv9aZs63EtvSwgjvt9K",
  "key20": "3BECooAsyK6HfuBhLjtY758xrKsVm7XG6q38DvF1qBsDk1ioApSYprfpmGZevpg8zg7siz1Seez3qpkYP4Uqb1tA",
  "key21": "5pVLBiaPV7EKNbgFvCKEEBSanxLBYP45c5bnnFVXjeavpJHsbba9E5twtPg2NKjiooSH5CLCo8NFHCAxH64wukwF",
  "key22": "4opup91oX5zCUC1yiR5z1YnbBcjzPSm5JseqcmZmzHwSDTibuZPwbiyKzHe9mQqU1Q5UtWFs8PJTym5t5yY7PS1s",
  "key23": "49inFi925bKtw5AAq5WbskeipC49PmDHJFWLBr6PmSRZDNyxC1NWU7FtFGHDREu2xTFqu7s5wSvRt9zCeZ9jNR1m",
  "key24": "5jpuKq5doVY4WeagWamsfnG9RTYmTJwJJ4p1cMRPGByGL4PGE7idA9m8KN6W693w5mYhF2AcxQj8AKs1RJKRVCDc",
  "key25": "4ugc5vnnHk6i4771ZMmJEd1gKYhfZnjUTFuNjhJnZeEnRAhhY3D9PKVkqQYp7RMyvhqNXgM3Ma8gNw7FqUHwzFaU",
  "key26": "XBGkmpMdHf5VPviaFpGaaBUtpQUJBajBBXfcM5K79JWc7n8HSKkViwuSB56Yjbyb6ZQbRVHSgYiLFahk2xdHDhH",
  "key27": "2GhQcDtGCMwTdTEWoPKY9xXawcpPH4iKiSb3rHQThh8qPt2SXMqtJvHwBhLqHGYRzzH8NUkhZuPrCorw6pcFRMdK"
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
