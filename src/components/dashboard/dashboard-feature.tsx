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
    "4Ey4VgWa2H53zXZmtSxTq3odjW7ZaLvLnbjomnAmrJjjzfMvXUPWv4uQC5yXhYn5BnK6DDLHbwW2aFbB8iQYp3dN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2Cahd3Lu52KsbVdfDu72wdPWgjge8AdArBZrmJkE86oPy164isLqsx3fd2i3suoECiDKPFtAvQHwr6QgVYYguevk",
  "key1": "3Erh4qgktqea4fEtrowWmpWMnJ5ehBWcYf1MVfQRPUANxSY5MJjzW83MJgrKuZqgTMUeQSjhPCNeVQwRCcFEffkL",
  "key2": "27Y4iyQDSrLA8oV25EQRpUS5kbjaJZgMfx524hEXpR3AcEC74H2nkbUQZpMUXjvLRNgZttTojLGwmuhKsxzJjoMk",
  "key3": "2F4o3t5MbvMu5iX8WL5TDLZQQcd8h3iW9Si4esztecmGZ69b13wzj2LL7kmj13p3XtFrcqquG8FTfWTvySfNT5rb",
  "key4": "4uRtGJV3W5J4qivxfNa34KSBnyWL8tQYoV1fZN5XfZsmt5gq7RBgCtZAuL2A8M3SBPe61JHyPPocHRyAjwJsWqE8",
  "key5": "2AaXMLyeDGfT5hVUG3DQTbP5EpUH2WgKqf3FUyMj3z4mc2MAwaUuNNmFmoagoS9vLKvAeMLqhpsBGpkP4o4NpE8w",
  "key6": "5Ghp3ywwLW4oJrQyaVxhZ6hDSJKBqroCeXnDrAAw4x8E5bsjb7Rmn1xnAUxJhAQu1qWhPGgHU2RZV6dvqn4AcjWW",
  "key7": "AvBDMgQ7aBb8Q3vT8TDGGKeu7BrNRyZ5bj41jyx81EGi5C1EcoN1um719FYu4VZgr4EWwVixhVR4xfZG5SRgUJ5",
  "key8": "2YMGZXwmQNhK1fL8N1wBMHC93ot5F6PqPUkPJxRTK8XB9QJMpxUyuM4Ru7H2RvtmJt92J71uj6qgLGq3auLZ59Vg",
  "key9": "4KAjRr2qoRDWw31VUZwYDvDMHQLSHFKVT8KJikfiSvQjin5xa95JqYDbkuU1ukgVJKAaikjpAzETA7CNsQuB76Qt",
  "key10": "3EoJpZLxvbLsFRQYA77arhP74eHwH7pKPeHHUERyGyH3E6jqbhBbrRrFaK9voGjCn4ezeB1LBSiiHmsCoFMmESiy",
  "key11": "2gKJVmLGyNB9aCMG4fLNpBKE9vcT4FPhzs7yjabAouG5zjMS8aT1CiccmGrvu3QqaRCi6Ltx1JJWggLi21inRHSr",
  "key12": "fjtKHGZTCMhhcuFgoLAA2zPyDbk17E1ci9FYzQgfijUUgQ6ghrALKDmqH4QQJz4PDNt7XFwDfaYwax8ryteLY15",
  "key13": "5Ccs4wP371i2XCjfhPYJVwQgMh1HeyzozKhndvtPvaWpfagk7boYkJ9t3bMe2HFuY6q6GH2DSNv9awW3ti9i5Bwf",
  "key14": "xFeGjYQLqhweq9dfMDedB1jscW9QL385h1iNhooFY5aYgDC4vNos3gGQhAgMassogcXHAUhdDhaodfiDP1tpkfX",
  "key15": "3KTXHUDtthuCzUPq53zodf9q4DoDcwHggSAGf7gMa3JXboAPYuQ9UqFJDEj2BP6BkRW2WnjDu9b8Bx1mvp23Z4vU",
  "key16": "5beBaW5dT8U2KT2K15UjhDtQ833WX1zjXjUyWfrZ5VwMuUXnkByQq1K6rgp4aYsGCL8UWH1QKzjdxMGX4kno31u1",
  "key17": "5mwZXH5WxvJX11MjFfimZgMZ3RtgnYZDXyYpu3vChusoAei3ay8cG4NuFoD9eZk8Cg7vde5GahWTWSphQrhu3Grr",
  "key18": "gAxzTASUaH3GFRMhcdkiqF24Ky2NW6dTKzQ74nBa3FocmrbekK1RR6boC79uQJHJTD36JuUzdsMjJwZD79xJ7JK",
  "key19": "4ZqQaNm3r4XuUntxcBuMjHMf8RtRdPtvrrek7foMb5oq2a4W9riSNzCyKSWLR7pbK5t6FnrVqvwYdZFWqnkAeCDu",
  "key20": "2vUjVevSkep1ssy8N5HaJYPVPeWBb2XGtL7CJeEDH99CB72NU1GRxad5w3a4rQrgcpx5Kk16HSx816evafEHBtno",
  "key21": "2CpQMzHZyRW4LszujCPYE8rusr7Yto1cRBjDNwm6LeaYDpL6UMGr9WHPDioyLXzXXZVSLBpaHswpQgD9ZANkfwMD",
  "key22": "65aheRZZhugPDDHwN3hTdYtMsgUyFqNv5PL7ogWDUPrQgot7bCUKEEtPSFS7iVkoFvcAWkiynm5qNP3wsyjxgmue",
  "key23": "4SyK1t7DnPFm4EXB5iVYyYMo6KwuBd3W5FBmuuLc5y4nNLskdXzJG7pddg2Q9QZsoCUjK99hRXdmYB6nXDPSetmU",
  "key24": "WqhLU1FfBgh1Vja34WuHobaC9YYyy5mmw7Hau5vgcjvFAZxA7CdiiYesCTMPFCYG7hG4mCDTAPzou9mbnPK2DA3"
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
