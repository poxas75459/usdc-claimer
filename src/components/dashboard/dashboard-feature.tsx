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
    "5j3zYtMX68DSwFBL9DJfoZE9SCZTTKVrGmmDgaD6sseSnHKFErSJnG1GESVrJZJUfJ4W3Kdtoy7mVbdFASTYizQe"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3mfsSQQQL6BFZgn1b7mnY3C9G2Qb3u7mFFyqmgVgXVjp9DcqUXLhHQmViHUcNA9M2sQksYpCsMqNTAxPdD8YrYPZ",
  "key1": "2deCPRW1A9T9ySSVKZYDBBieEddTjBHjURKnL8TEKuUipBB7vT2YbxfoQipfYqWVgSHknXA8puwhUs1R623NHgGd",
  "key2": "sEjVNV9iAZmAou1mSRBDdLGGc1aarRwtXwNJWPCddXk28TD3zT4TcJqF78T6SSrKgMcbFAoUF9iKRqvQatrnPy2",
  "key3": "4mJHSkQjAq8pgVrpqseqRyqodvCLXJTRuRAdHRN7PZu1miPL5mhULpui6TUs8qDmaSmcMRBj2d8rLEpJAKtGQzQw",
  "key4": "5HZLiPkYxkRG45Jhx5ga9CEfkLzSbdGUFeDkq3FYuwrPM2rEpUDYjG2Wq1neH3kypKRyHxuYmS5Sd4viZHMMHPS5",
  "key5": "igzfyMNYUKrthFAPWTrvttCLhoW49cK3MXXibCnTVvZZ8GCLRzPdFMLU61hFpLeNyLFdekNAZ2B79ouw8XRf1yG",
  "key6": "2XW9tSzvqa9NUZgAtgU7eExypiqip6C12JJeZeKaH9t5Bb41XfjcGzznTWCjant5z9hP7DRruU83prsk1ZBioM8A",
  "key7": "Qdwyrb1Z2VzxZcfpPbYSVE2M9mRrFwxi6PrH2XV2NSY8zE9fU6efRyRvfTLQedeLKCvqN3pLJQsptAahzXsaSf7",
  "key8": "HmCTpxMRj2Rb9WWALuw879yR2c8hoGpE9JQGQ9yRggrazGNXnXBSsJhaPPM18pCkwtXH8ahoaxen2dsPGhuDbdt",
  "key9": "3FM8nv1A1t8HcohjVngVw9xZEcAeLfecYH2X41TeD4Jn6urMzJWxCFvj3ZCg92yFJo47XsTttNDf3yt4HBsd4K3W",
  "key10": "2s7Q4NKZWSSWVyGnTkyaLksjXfqWhWkZeomDTanfhjvtW2f9xxPEwyD9gKXRdu2osDT2oEYaj33Qsrfxsy3eawoF",
  "key11": "5Q7fMsdyqR5F8FSYWN3u2opCv3GqXLXXVLky2h6UUD9arYuSBanHnsstQgK8VXmeADNA2ztUG3VB9ZkUCnFPtvHg",
  "key12": "4UyKpNe9VzJm5s4Nz1gR4MS2LmUSW6YCwK9gqM9ukqvBvFjzfwujhRARSbqDu4UKjXv85wVzJm5DcDnLHkDgqDCD",
  "key13": "5xpvaF4UFxXXYfDVGyZET4iAvfmzEtowA13BBJGGGjNMYpLG7c7ETaeoQFs7GZaXPaFuXEBq5ddtSa1eptD5aWHN",
  "key14": "4jv8W37cpKmopDejypdYgGnC2YnebrAF3pCyR2BECuCpr7JAUzaURkDzAhv3FkZJVnMs3RaErn7SyrxvCVUWyKvd",
  "key15": "2FrJeag2bXQkyRNzvEwM8fyPXmJF41jQLDULs37qCYr7LDaWK5zZSeu54fECgWTB4U8uFBTmQuzhB79cX5HS5Fud",
  "key16": "RA9RHJHXnSca2jhLM86QfuSyktCDQHv6Btb6911EXmNW2LVMf6p8NU5B2kMWFE9BqCWJ1xFnMKvUrC7tDbLwUeN",
  "key17": "3wdphKZYL2XG5BzcWYjsP4Zwb9r8zSYdWEm4LCQgYYPoo4NGT2tB3MKF6YsMNDRiJgVfdWBjAsSZnj9Vnh26DiCa",
  "key18": "2WiE5vtmndcQHQyD5rPopeKxEyXr3UWuR99q1616VDxd62UcqJsgSjKyE2WqqkZZTRd4MuvbjZwpGyNXHyFnFyxv",
  "key19": "5p9qw7EbxCjhNV1eddf1dKdwSwTmthGuQoVTdQVdLG7maHCd9Px3esqUMJraqwiUZdUh29Uaxe3zfW7xCx3Rnydv",
  "key20": "67giDMHGiFdZvJtvRqoGg7MfHd6FELomxU4Kz2HnAqYSj8dScR3tQmiZbiPArdSh8E18DAbR9u8Vr6CjusPQtqEm",
  "key21": "5su7VgDAB1uVC9g8LCPMgHvgj3uRbnn1eBwGQ3sJAsiDHFAZn3pDcJeSPzwN1H6YUjJQaC41Dssjaazy4S69RWpi",
  "key22": "3B5ChrkuX1u93fxDQyGwVrBwEvshGSVik8GXztr59YgrX1h4g9w1coCaerWYGmNGMYZgMBkkW4BDbQt1UTQihZCD",
  "key23": "45Vi93gsBL7Ei8yYXEZu94tsgshu5xS8W2WpT2vmXL4HQTzpgJEiKVr5sGN5F2JQqQYiXZ3sgRQC7UTiUtLPQ891",
  "key24": "29RLAekcdS7dk7A7Q8DUFW3kRCcMKQ433eDXDMULD3QjQ1cpiiYqS4KFoKME3wL3GZaqHaTn81EbBR1WoZvyJkab",
  "key25": "NMXArH6uh4wKqDrwxvqvx4xPxfNKXvkd65v1Z6M4XiSU9kGDsBBdeGXFNU1vMXT6nuWf7y3RHHs4B13xEn2ojJX",
  "key26": "58XX6HDkehQwPzhiGTDdVs1zmrPdge3h9339JuCSePRmBQyDHQ73eHsio2CULWkA5gSCsmbrbdvxFf6xNJ2F8x1F",
  "key27": "5S5QKWV7hvLuvFbA8377ooMGyvNp4BDHCiRMW1AFsmJ2iMVnnPdCN8vogS9av3onyTSm2wCyNun4M16fnMxZBCAV",
  "key28": "4QphWoLziTorGUFwQTWUxzYbR23xK7Z78gmfX5nn77ZzdLvL1XyCaB1rDHRW1N8d3SCyUQquvZqDLcMcktFJfSBh",
  "key29": "eayL2nPrNegvQ8WeiYcJ5kKvQ8G3DzRY3cHdbMcAGzvsfL2g2uwyzL4NZyRaxQv6MEnV5bvUELajyrjSD2Xdgo4",
  "key30": "5eL35GBRbkidqR4bV1xZ2Xm4cAg3LFGJaQRRS29uHUm3s6Gs9SZe8gW4CaWWqm4EWfL9RQzVNhzQhoH2vGqyvcjP",
  "key31": "5U9Uh57pGEVp1it8JrJD5ifqbVYdX9dCosfiMFaf2AV41cPQj1gAsgUcWXRWBiZWMwqvmuJcmu7HLVrC8J3XJk24",
  "key32": "5NAUeWaF5D2mvDPPJgwFj1xh4jVEcMjHEi4kCW8Xmz34EmybcRpn66DTTmtMFYcTgrkt1JHxZ6y1ACZEeYbBSj2m",
  "key33": "3BJzDWZX3k2m9PyoPoDNehbrW3K58eSWfJHfLcMzj1XMuAsvAMD6cQhnsWya3v6xepJhcUWE79fh3niZcFSzRh7q",
  "key34": "JWFpBVs881iEGvFFSsG8En1BrKuGogiVpwFyP5t33tnxcwQe3oSbimJacvDQW6UkB4Yk6UZnunQukXPc5fDR4yp",
  "key35": "4uyCVTYfthTcGqAPuAh86iv4UwfyDbGYcoUS5yeT4a5RfRQwfVUDhgVKkWLK1ZyvxqT9ve5QgMA3r1R8shgmr1KG",
  "key36": "2CJepF7pC34YVj2fKJ8TA16N4TsGr9D1cEbLtGDtRxDjs2VibeUGgfD6sB9vFeWKbSSMJWqLCzWhkMDcFrDZW3Sh"
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
