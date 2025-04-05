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
    "2DwTbhUiNeRG2eMKr4NuHbGyGSB39EiqYRTtSefgwEUJHaXhuWynQSPjjxVfwXH2KStv1boZXjm5HLcTaBB96feL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4N2U4Y3ES9358QAnx7GJnTfx7WMxpbUREwPAem9Q9j7N2ESVm2xARd8CWZSCAPmne8n9KnGX1wUYhTMqiXLd5t36",
  "key1": "5jBUCMivLMrcxEJ7DtgAxZGKujkbpE6sQAJNxPWeQi2VobmYq3UUkqbxKmPTexsDZgUJodvwJpbwwqUYxWrUVRbJ",
  "key2": "4RhG8csYEUAd6F1hMkMbPG6ntPGFQWX9iAfQJTjjc3LTaxBek7v42rP7fxbRKSKwNm8wrHnioxi38tefVdos3bAm",
  "key3": "2vUzsAE91hU4BXMGxs3BZzPUXfzYDjisn7GU7bJ9g59g2pUnDnczb422WyDmCGSzxuAkGHwVc2Bu5YXbTSkEqsw3",
  "key4": "5af7MKVJ2WEpLg5y6XG7UeAGGkxZc8DWMrPGPmUKnv3NkRFGbvb4QrFRAH3dQGnhmbp2J38Zawqrt66AkUZ8E23v",
  "key5": "41oYft22exAuyR4mS19yFsv2cY5uJ2wQkmwYphK97eF5QZSdNom9YsZA4GMoWDHs6SpVzfMDoBeBaNwdExdadvBq",
  "key6": "3SBkWibLRkkravj6biAboBQb1YaHhzns5VkyUsPTFjvCTiaKo3p8Lw1EjskVuHDZUTrgi39i5XsoD1BtcCp57dp",
  "key7": "3cCmZp95oEABKkDUZiWu7963sSi9j1mXm6wmwUn7VFyCEK8gFwh8S3f8gP9TCxueYR1Vm3NSaRh2LKLRgTeMZctM",
  "key8": "3CoYz7jkeiggASUZH2iMMJb6HBbQ3vuxYzujACdv5jbHSmDPMtbbWQ7h6ySSihq2RC32UsTDPWPReQBfxa4yKEuq",
  "key9": "3Y4Yv7447wiCF2xML8TW51Sidhs7Y6ppSDGx8vmtiasXq1BY1Q7tNdmRCgWwx4Mwg84LdK1TcdHwoFCPwqSPEHRF",
  "key10": "gMjQ1wCt7oSAV7eVUFtVPvHqwuee6Th6MHuUmrpGeYh7VSxxTBq1eu6VZ4vU5CTDG5rS8msYiMqFRQDN4hfMyVD",
  "key11": "5CJiqEPK2iTsphegmDudQ1RCAbwK89rJv1EKZi8hqTeM4RJrMQzpq4oYPbEybRBVFfPmoBLHreESzQGHBzcdGwXA",
  "key12": "LMWwhLEpsfFnoWW9noU9F1oqs7jkejFCFjmXSrbaWCKEhQZvgKAeN8FgeBZWfe8kwzGAmnvkJQm9NwPQSFfCjWR",
  "key13": "3gWZnXREFBiMcTFTrJZY3U18PLwyGXDvLwX6cvcJHwGfZiw9MrjCLsHnyTfnBCpqgmBiEUgt5QefsJFdhtVbSAKQ",
  "key14": "4gw2Ygx1nbsaWsHWR97xJrBebWceK229gKSJrpc3r9SSzwWoeWXoTkqN9uPeidpawLZtY7kbENdM61B4gnyXQhnM",
  "key15": "33My6uCRroRRoht2jjLLgUyUm1WptbVC8bUQR4DWroGGCZeX4cZc3iZhJG3obZUnRsErzucJhhkQbizMXnKJDGp1",
  "key16": "5AoctwuMejiWVmbguVmj5j5yBjiZ35LVvxgd2PEZecw9bxzoStMiNciDUQrVrU6KDHSY3pUDUtfxhQ6jotpBTHFF",
  "key17": "3vCnMB1n6wqx3M3rLC2MiHsTdwWVMGH4y4SNbD5YXQmrtTWn4wFwHvfm9xD6EddhNhVn5psU2ujxXE1kCf1rvtab",
  "key18": "3jbG8UVD1ki5YxFNXyATGiernQgmu1fwuH3hKyN6i2E9yoD2Cb2SLAjkKPNnThBCzUzVLisXCSE6tapEaQg1KyJK",
  "key19": "4J42mVkkmYE198CmfyHjwLYUEUw3bcLupfgv6oY9BNaQuJsfobKhi7XufYALVzJh3vbSVWSqo35rjcakS1kbnjAx",
  "key20": "513rwMsBguwcGCtb9y4GMr4MrnFr4yPZm5oxnKS2e8Edqyt9PKqRFSPtqTYavRA3WUBcY69KCYcpwrcQGEBUuYuL",
  "key21": "4PWaVisX1kt3Z34WdBU2Ez5nQYuAfE6iAE6QmsUhFEDHFWq2H1ww54CWUp2DSNnDfkbUgmdzmnj6NW6eW3uTf9WT",
  "key22": "21kVsq2rgtdDRZ91K6T4rYq8xXVngR9rRu4fS5RgsPpZUU2pfXuz5UA49FbAyoWMWTdqjWKF4NifKMMpXrLkk4kb",
  "key23": "3o8sC5f6oqgEuiyEUYWiS6VhDNKyKeSfyxQMywkHNFSy4xzxTExq8jh1tafF8BAvZh1WYnFJ2qtDM6vuRpf6sSa1",
  "key24": "4Ncey6fvDTVwD6NrJQTEDNKRLPvMH7cztLtnas6epfzMyGwkD66ExrD8fDkUfVUybv8fsLyD44iuQso5oN2Gewip",
  "key25": "5J9SsmpJ7wNKeHiCw96CMufyLtZJQRoZ3bUkoGrmco4KV7bVtir5bx4JLR6aVTLUBbqKarN3XuCJCKE3TQ5vaLe3",
  "key26": "5QZEaeDrVtACsQn2HTLEhmyhjrDArsBGHrBNWK8tY192fHYaRZHErKtJYJxM8WvhonFv4vXWRqt1Pzr9tMZdTECk",
  "key27": "4xG9VbuCNGsGVsv6sAiXzvzdfFkRipcsYPpuTAPKkn9xQaSYgWFsVTECnjGpxLbdkeKTzpscQ1GSfCs9oRoSLiDx",
  "key28": "4xJ6aEnbVk7cnZ1VrwYrtCLJy2dGkUSu5eBpyuakbMqwZVpxQqyXBRRFJBj4ngtTU2psrjpg6s2BRnrhZ8eyq6QD",
  "key29": "wzUNojNqHJYPA6Nqvm7SsW3qYRXZeAZpDb73yVnupzeiD6vCtQAtGLZkRT6pgaou8272vBr72dRdGMVdPM2TDFo",
  "key30": "2Dsiz4qZDaSskf8YM48F4iTRHjtwHJSCmmTaATfdhyJvUDyRLBfSGCaWoV6V7DPHGdD8CfCEjQbgpQM2LaBaY7yR",
  "key31": "2aTCQPm97tdigoGrv4cx68qq4bnqT2eEUm3JrcPphcabAdSZovARpfo6WsgK1EnjcTDQf4gDEnM7DkETTDnmuSs8",
  "key32": "5SsHcKSrWnhBAiY1SgoapDBfZ1vaAzFG9sB7DQz14pzQkNeqHSeTcDbmeidwAaw2eKMRn4XqCoK53tj2YopND5x"
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
