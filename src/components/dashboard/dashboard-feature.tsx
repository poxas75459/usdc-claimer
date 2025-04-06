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
    "4KTNHFLh3HP5oXpZQoHAPw41Y7LD2yMpGjVnUyLB8k9TMrwvvYBjUChLeubfCCXRSV9wLpQuSpGD48dx9ZnQNWwP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2U6jHyfxgFePCZihq42dja9iwAtPWrPkCPpCA3AAWVRkyRmcHySm76sLEmus63sQSE6dugxY48z55v9zGCowead9",
  "key1": "5FgXvqPCskhDgjxV1RjgEdpTA65f5nzpkqcoxkHBdbzwKrsHaSsZACvd1ZpfbL9dqmK7Uu8XfUh9rz2oswxZQkSK",
  "key2": "4wr8Edk93hG69rh5nHz6XMqHAvRDPEW9gp6TRHdzHwJ5RsjXbqscSNVSDmLedimTG4jg1PaHXVSDTVUT3FT6GuFq",
  "key3": "268RTy2tk85QCAEQcYvXPRaHvFxhshEAHHmt4zkdVuxjvcPHydRzswc7Nbv2Ndcz2utA4z214u1CAfSfrVLuHxnL",
  "key4": "4NYwLVHUbKxkA7Xe86eqtims6sUThm5FNjrSp9AC1NVuoyv9SstaAmt4i2K9gdK6bZCJCU4MWhNTL1WknwxKaWgR",
  "key5": "2XeqWjrkjfzMB2WjE7HW5NkPzF3773KyMzA6ebq87jejYkuuiqHyNVkw3E7f71MhA5yAA72jr8H3EKqPC559oy4M",
  "key6": "ZpqcJwYY6x4uP9kryd5PDF4pYW8onhyvhr7vD3asCUpN2Pn3gLSbjhMZ1HTsReNN9V96uZUzgotxUrQLDMXnzzX",
  "key7": "9vWAdJRGej8FicRu8PVPhFTQS9QYERmnzQCFxGmgcKtM43etwPGPymHhcZo1okFsgzCVx5R7BPTZqW2cviNPE5J",
  "key8": "jz28Qm5fZV48pL5GEJFaRVJnoH9fGQUHhTdcWpYzmybS7FDdvBaDBXyTbudjpPeqJHcBrVk1HZSmmaousGUnHDc",
  "key9": "32ncmRB3Jx1UM3vVzn5vCwTH9NsxfWR7aBZLgtFriiCF1op3J95zBRU59E9YNppQLdngCDSgoh5qQnasqoVvRyMz",
  "key10": "5xDkMCdsrJ9Y6CnCuTdPt4TJqcxzPEVgeYupfDDMwgsBmJCzsjB9VVxzR4zdXeh7dJ4xmDP7NcEgEk5pu6dzTbrn",
  "key11": "5Sccp53NLExYoF7h7cpVx4dXmmNYe8PPTLM28kd73T6wD8z2d1bjd4NiKCR8zMPukMzg5PoXdDBzpQtAuUkzCY4q",
  "key12": "5FcqrzzHxxvUQwsvnV2nSDjVZLJHAwaZwfFUdJUVjPAp6sTPrnRBRHhUo34SF5Ei7BTq8ozJoHZvCySwEjSGaDVo",
  "key13": "2PMxqZjyXoNuvrj2iw9iYHzW8aXficdpfGAhL5PhReTf5rdfSAuhdeMoNg6Gr4sriPVxtKRUQuGhesiWtFGoZgNa",
  "key14": "5VoCHzaJCAr5Wynz4ie9Jw5ti9Z7bBu1bX1eBWxC6BamkQBGszQmDbpdvtCmvxEQjRdNxma3jZToH1yYTHxN27nV",
  "key15": "3nVbw7B7K9VXrAV4ZZh7fhp8Z8jF7RPPCArBkFTZ5doFvapU9xLGjsxZhr8xSjAmUtTsv4HXhHozSyTJiUKJkNsi",
  "key16": "3zXbTNMCei6z5FQVYdUAkQE7jQy6Pz5nPumRuvrStw5tTqoVRuTZVJv5ZwPVZ98KK5WqtzrKZ36VZec9Yp6Eixyu",
  "key17": "2HL7Rg3WPH2yQnmgYvbPk2rUioQuw8SiCnpWxsik42bMTd4jL68Hw4QsFY3LXwB7jUE41tTPAvN8VKRPoL9i3ep",
  "key18": "5MgwhfiohQnamttxduQ4FXVeUnint4ZYJ8cvFbdc9fe2ARXGiZgj6yV9HNbkruxyKKwYBMXV6v1HajzJBUSfeDPE",
  "key19": "4TNiWsGHuqePaM46MvyfgcYcgiH3Db8yuKwamrFw7sGSbcRu93uh5fFLAF1KeFk5fbwVaUeP4fXHosSBVnFSer4U",
  "key20": "361eJptz5gRHwyNzCxRjw25fEeE2SfMtdwAMdAiVuTiZwBPPAZV4S2Bse4v4ZCoTLZBvsSJRFRCqjna9sFgW8U3T",
  "key21": "Vf4ShJvrSNSuyak6kqTcDnvJz6gLA1VrAr8fikrsw3RFB7k7vWKTRTTXn3GdhJZZS3WDQ2UQgVQW6f7g5v4n7h3",
  "key22": "3cJRK1s9FEctsqoWTYTXovAgL7t39FcQmFsQ9nDRMH51EukHbsFcgWAzdaRbScLZtHKbpKHtzjZZMgVAzdWoHxPj",
  "key23": "4JZqAHUDj16GnWhcJh4k4gDT1StBzMAPZKUykwxk4vL12kiqELiRGmSpDCm1KsPEeN6rrDxSiNFQ6qYytug68gCM",
  "key24": "2bn5LafXdsTdmQVfEa8HKVbnixZxLDJy23jteTnjVJmgQ1pYQdNWwYkqqnu6HCC9VfpgmGCFmndhSWwrvtjApYAv",
  "key25": "4qaywyu93cdGtAL16QMTpYaF9aurJvbCQ7Pmmsd5Hv3HiE5GCQocT15zM7pyogju5JajZ9ko3FZAD4WMPvKTQea7",
  "key26": "46UC1RH6oeFwQSMuF5Fe7GPedABphH8JE4mhpe9n9DaEidmUdFsKwQmG6g7XvGnNXfK5t7ZWLgehYoRwGG1Jwri8",
  "key27": "2H6gPJJNQZxW2yHPbW8zqoRTPuGYcPWqPxZVpNimjS6v9ayTHa9cqFvNx7QjHJGvwyN3tYyGmSAr4xhfmBhUqi3T",
  "key28": "ky8xmaXx3BvKTedo2u4exKCNe2h7b42ayjEi5i6AeXpyfURW7XFV87GPTk7FAMhQCkxprwtdRxUiHgC6S5LUQWK",
  "key29": "66fxgiXMNzTjpnyf16eyoLZscXSeyDQYuka6UhwtTs83jKZdixi4ogSoAdRJnJaiMfefdx1YaNrhrbX6nCEJWHyu",
  "key30": "325n7W4UcqtgztaFyuz7wttr9zVHa3qZAvAPRhKdC6Mg6jxduy7j3NEqatYXXkBCHBwvBo4FkMkatpeuEs8JA7Vk",
  "key31": "5ueJjysPRoHUt8YacKRbrCtpRziR5K1Vohrar2EHyR1s9orWjper6ZFmrwup1ZjegEKqQdVmgrKMUKVrJ8EbTXvx",
  "key32": "tUAz5WXg4z6PKKp9h5575LB8Rb8Prf9DfX6ytZMqV8m43Q29AtrLutYjQXYpw6LJci9epRtU898STKLagWvLyFy",
  "key33": "NTwav9kMuMVDMfJoApRGQRSa45SvfYwmVgx2iwLw2RJ2FwUq696HCbJ6vgRHm5Dd5tqFhEdZosUxSkAZnqkBJpc",
  "key34": "3ajgdiy1dw1SHcR8zsnGzbkSrcmAwFZmif1dqUge6AoCdSkJVxik8BLvmxZhpU4ZXjENPybN8D8fqnbssGDRgZxX",
  "key35": "3Tchwa6y6b2QGRAymamXmzeyiv7rzqt6iaLKDeMvYKk6vtDnw7jgLxRXGq7dkHxuC4MKgLgnT9HCb8ESrtE3x18y",
  "key36": "5e2KQ6QW8Vi2ejkLyt8sNew9AQDqoGjkqxqa1E5HNJgVDcLw18ZSg73e2pf5LRNK6Ur6idJJ5V6GyqeyqYChiC3n",
  "key37": "5yc9N8dh6saPu42YKGaYzgwGdVmUoV9oXYkEjPtbDvkxdQseVJPHu3UynVreMpV28xK22BpU8U2QDryTpj6AFbCL",
  "key38": "h81QaMHek1SRPhC5sPXmNfeTKZtPr7UbVsnfySo1cdiv7jNj7f83Yw5w3mwKnGE9545z6yqNRwuR49AWeWpLwYz",
  "key39": "2Yf2wkDchoN5GhMnLuV5fBCaBMerWTCGiJXvbyci4GxT4hppbzpDrvaZMUBCMeEtMCSmuJPaSDbAuTLXfR311R8R",
  "key40": "5TgDE1U4WWX3yqfz6opa4qJ5q8zU4CKHWHVH1M2GFErGHPrDPNJRMKxy8oTm2w4XhtvTRmcRL5WmfXBj6PkxbCsv",
  "key41": "3s3vcsFNRq9cYXw8UfmtaUBfdy2yVQx7hrgKGPEh1NWPV4jQ87iW4fsfznxxdGbJMsdyEmBp18Hno3t1ihtxGvgy",
  "key42": "nQTENZi6QKnuqHWENDonTKfwA1xUSMu4ghbnsPAkYMiDo69Z3ftDeZXAjbip53q5qXo1pzQZko188eAHVmEouLB",
  "key43": "4zWicPrVvoDwPX8viK7DNkyEv8FiFJDLaqugkxkrzzViQmgGDsx74cTnzQH3wbP3kMFPWR8tgUJ5XktV81DJvznQ",
  "key44": "4kA2iES8C5dd8SsyhNgcFgAquFrtYqKtA1iMHaNvLf5vYztansK6TBrJJLeJv6WajN7wEXBxap3Zx49CiHeTQhL1",
  "key45": "2FnBvymZ2wsBiBxLqUNVhoyuj3XSsTv8P9B4S6Hq6VjGkXTKNhKBZFYRY5xm5CWYr9yrzVbXMCTwQ8BStEwiswpa",
  "key46": "56RujEp1aiVtgzAweYXrint5ujmspjyFFos1cC3JdgVapdiSBApkb1VmpZn6zfRwRAAomQkqRycYzGrUSrx5BWyN",
  "key47": "3o14S8src5Xj48dWqxo8GVCRR1f9ag6qaQVSmfCWhs6WRmeegBMtVwXbEbA6fAWSy3DHdPFghzGxzdMFFbptzAS4",
  "key48": "2Co4DJ2Xzj4M8SrbBstEg9ht93kr5qH13BKMsXFiTNBqzZUFZZTJdDHeN1TgGhad8Ktiar9dfAmzf3sowcbUFVad"
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
