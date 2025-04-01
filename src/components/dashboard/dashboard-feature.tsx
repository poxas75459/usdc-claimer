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
    "bhX8sbc4Xsv33n8ZmsAdWX7yWApz8kbiNcUHcXs2y11BBoCgoFt4r3PKb8AHZ7dYSnoscedcxeyGKi7YPLSvjPG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "46dxJZoxWx9iPWDJg5s7nxQTCKzi5XuD8ovrTAyzDT43UCJJWjh38dtKRr9xcnFeDCqxw73TXc7dhMdk8yhNbT7j",
  "key1": "4Qz31HRG518nBTHdYGFHQ3d56ZghqznvDTkoeR5fiiAa4d7KU4UqZLGgXGNR3WKrRa99Hbx5Afje3eEh1ChFUM5S",
  "key2": "5N2CnVdZpCvTU35zp9KxN1FNBUcFSRUHgNVMsYiaCvoXHXCgf9fA6a11Xrhq1qjta7o3Pri7UnWLvP8ypVz6FZ9z",
  "key3": "4UFmAkiG37ZzNBSkHsJ8cDjUMCZCz58amdtqPbavwobyQmtb3SFFFAyzL83kxmn2mdxoS1q713FHmQvrYgPmegWX",
  "key4": "42HZC851M7vKYHQKsURCMSJ9Hsk5WYwBLoi4aZ8GV2ABt9gMwU6HatpWgSRhN3PhFLBq5edHX2TsvNnYdiWuVnd6",
  "key5": "4hpFTrHV2S8ggVFXbGskvjDKpea4RU7ccRso3aGbTcSeXd8Sz9XszbMSHGdDpepoxjJDANfuWeRbTa3iHwPYm786",
  "key6": "2TchggeXQ2v96UHS45rsw1EHBcHkasVpmh4uYjXkuP7rnZsxBdQZbgsoccyV2itJpuWkAvqtUHhTYr3a2XqjNU6w",
  "key7": "29917oKGy7WpmrAyjD571qjbofR7q7abZNZE4p7sefbrrQNG3GJsZozSrVv7kNZY3gsL9A52mnHiWdZbQ2RqnhTt",
  "key8": "eFvCqzHZ2e5oq2gadx1Ax9sfTBQivnhcLxALUnUKNg166qoZbScExNgkbzRCpw4fuG9x6hznBCuBXPCQYmKrrLq",
  "key9": "3SSg8yWi6q1VeHHUxLuB9T8wJjXjGkYJMuLBKbTgmv3nJaX8WthHCTdKTqWjqgAWQBxmWBsH1KSoXUmJHS5UNhA7",
  "key10": "2pjTHhmiBwBNSEqs8qN3c228zgEWoS6hQYD9rrZefnSDHsRSzDtkB5QVFAcb3rdpgwvj34NsHxcicrQZxBc1LiDb",
  "key11": "5nGkEQqzR87KyeDi6donSwicxHQm23EW9Ti29nkqjXtB2wgBLALsnLEfdqvZtqrPhMxLpLwCxtzdCeFAwXRfiqyZ",
  "key12": "2bPcN9dgPSkAmVtkyUiC1wt1xRnac8A4cyZvVyjGKeQmqUYybtF8R9UKPc8Cd2Gys7beHGN9231nPTPw33MeyRLp",
  "key13": "5cbQWvGG6hytvb9xntBiCvPCyh9fwYJsrrYLdgHTBhhqkrR9nM6DJWwCarrML8Ukq4cvPqBrLXBP5Sk72jKfbjD3",
  "key14": "5swe8L2qWFxyJjzd14TKZkYgQyL79fbJNG1B9kkuHjjBGJVvo2fBtk5M58Pr7eukFritnMkfjUh27T4wzVTqThP9",
  "key15": "3HuTjUkW9XMJXtUxUaJgnaAfHz96UHKs3dkrZx4G1bzw46yE2BnVfP2nRXoWEY2LhdG1hxMxjqaf3wu8tQ5qG9xq",
  "key16": "AEuoB2cWhUHbWf8PKSwtkqPSmjnCMJ9NJ1KJ8wFyCvDX5cbwzxSqFYm27CDvr8ETAPw9ZfchT4dEbTNniii9zkB",
  "key17": "3b56vCM8fLCi9RvFT9qk9AwmLwZdsxdrxfJBR2JuLvXju5FjtLv944DTPWjB2VFAtJYvMUJpqtYho7iau9kprfYz",
  "key18": "4JioaoxVubTQpC4KVH1g91Q3kzACa6MmS4mZHyksZNYoCGLZnC16M96YsqftmkimQxAgSCbKtqdS6babJDTYCrDT",
  "key19": "5W2fEhcDCmaq5jPDuinpZ34jfb9qtUPXYe8KVnFbqVpRqB3Gr48uWgqbjc21NYFALHCNsm5zee4yoWp9vUzvGdwY",
  "key20": "3Sv5MyMftte9eoSA2eEu8y9JyR2ms51MZky8uWk2vfxyWHTvA7QUZXMDjSvgRhALTa1zeHazPpiQP1xwFSw5HByM",
  "key21": "2WcejjAKHQxN6DrbE3p5aHwvdvYSnq5i8SPfb7oZkQG5ZSXx8NSFAbKv4gsdZ5qxBxENLCwFnBuxpopBNoqs8TQ9",
  "key22": "57DNJr2HTvRsbws4kEKhFtYyvxDkgsNZ59eV4dzaJJS6UfFLC2JCKT74M6CV9i8QhkDpUABYATUMixy7BPMk9zPm",
  "key23": "48ugR4ghHVL9J9S86vaB3tq2vj9haw1ub2ERpcaZq1LeCmgkqs4z3fycKYKKtiTm7EAwL6TYWwgeP5sU7omDkfe8",
  "key24": "4AEWzPVhZmogawtuzJt1WQTfsm8gMcHPenoJ7DnyxpjJC6t4LWbgdzGPrujwtEwhKSBJ8sbs13gN8UJ1PrSoJaFw",
  "key25": "4sf8fnQN2V4pvQP5HfDtfNPK3wJ2rtjTXEgeamT6gcXsccKfup9SgjELYFNeUE3rdM5JXXrATg4Szym9pvV7HvzY",
  "key26": "5SuMPGFuCozsiGtckURX4TXKkRqDHCp9kTGoNmeH252fsUbdJRNMXAZTPV6xabgHbF2aWnMksxUqaCr3u4dUShT4",
  "key27": "4Hp6vrYkWN3WxtniwEZLrorALnE4co9vtT4e9bA3z5qJHof6dspkpXaFcLyRaM4V4PrUJexk59Kb6MevBS8mweac",
  "key28": "4y439MYFyDZaqdKTTLvM81HbDsJoTJkvY1A4XF7gZyQUoonLEQ2qrHKgM29EshKdh8PMRNvoQWno5c1uWfqzRsCb",
  "key29": "4KF1HwYgfbTQT8ZwBXgx2br2f3Rt2RVkArfjLvAdGsMGC4rJ3997K5hnqcKFfiV44wwvYCyrpCbha8XRpzaNxEkC",
  "key30": "UL2QTZtF7tViqUak9CQKXbQa1D4RKMWRMnJfgYr4quBCYCKgsDmT95jS1JkndEooXAJf8D43YrdUhhWDcET83qy",
  "key31": "2t81BMSPaTuWWXdHximMXWNLpidwjKB6VkFRJhwDGFmfweB5zCRP651X3kcgTUqjXZuEWYpfTDMXCoN2yd7XbCc4",
  "key32": "2FRMUG7iGftGcmDheePPYAFq7Ppny4QnVGEm6bSFi7NnrcuomNTKMsvcUbjQsQWEU4yihMQRRKNSq22n3cnUsjW3",
  "key33": "3hSP6fLyXrSmm3jpQAmLkpjBPuiZYiKB4W1xf7xDydYwSPKRSRAEAiRbVjGaWnVeuLeWVfk7NHh1z2Ub218xhVrp",
  "key34": "62kkGeyHJ23vFzPtQTMVxDXhuP5bxefv38wXTWKhjTyp58w6Noy8j3eFzdNdkNqieW51KPgi8qrHuqeuyXdeEyQp",
  "key35": "BpBaAPTh21banrwV7KUUR99zWk22eNvT4UMdxgs54qyVt2R6roCce7gXk4iTcad54b7J2R1vYkPUMyHdfwGUwfi",
  "key36": "4ZUwCjAgjdJWFinaag5kpyfpckBpVKEYagMN8MpWJRRK3z6ft7whc1DVKzCHTqUNY6a4bMRW8JxrCTDYomwiYBXd",
  "key37": "5cYn13bBbMh915xxKJ891Q8BTnKhWib7TvAZvEeVcB4vwsDgMRaWYb1AgTbdHi8eRTq1d2bmfrziV43s8J4yvfna",
  "key38": "5XcmrAYUkZWsV5nAsZkoY3XD6efK8cwhtUdoo7BS8MFEX9n3Yp9kiGmsXbAAF25dYn4mouEwSLL6AM6dRPinuKJn",
  "key39": "67mQzfLPGEzBVWspkdxvncrY5VwHkLSPhCuuhKCVLk3fvT3rSvjH7tjaPdpYn9YptG3SfYFt9p7ZnkScCZG1rWHS",
  "key40": "3VE5MUg37DEzbxwiVK5GUa32WhfLD13s5tUGMTRkugzGHZqAmmt7gvT4geEwakFEc3Zx3xxdEEAx1DabbA8R1DBF",
  "key41": "9HnZkymgDoSHv4gdgb8y9KfFmCwqvQQYuPPZHVU5sddRTpSofdU74M854kp3N9FXMYsNACrNhwxYyuTfFpeGpby",
  "key42": "ZQWbno8G4dexhVev9iijwmnmYj6FP4X1Pixm4qYaUFHKinMo86x3ivgeidg3R4SLfNFJpKRmYpWywUtKMQP5oNJ",
  "key43": "3zrBGfzX3DfnC5Srnvo58FMs5kCg9H9Q76Sgsrjn3bG96aLYYn7ons7MQYBx1jDoixRLK1t5GmQfAXRftXgFZGn1",
  "key44": "KKBt3QVFuiHiiJ8DotSNU8ZU6R4g7QNKBYEAX9JW5bs3zGFCvukRzHhJZbsWtnBtv5WfdGPgjvb3wbZf1HSoaMx",
  "key45": "4g7bBADDACHvFavmU2gn7bc7nz5Ncf5kDZxAgX9np8WaHWWVwF5SPvKNqMk26tSvqUzzoSSJA1yvK2UCxGjq1R9f"
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
